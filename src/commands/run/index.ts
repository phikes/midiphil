import {Args, Flags, Command} from '@oclif/core'
import {Input, Output} from 'midi'
import {isEqual} from 'lodash'

class Processor {
  constructor (private lastNoteMessage: [number, number, number] | null = null) {}

  process(delta: number, [status, data0, data1]: [number, number, number], sendMessage: Output['sendMessage']) {
    if (status < 0x90 || status > 0x9F) { // anything but a note message we just proxy
      sendMessage([status, data0, data1])
      console.log("DON'T CARE")
      return
    }

    if (isEqual(this.lastNoteMessage, [status, data0, 100]) && data1 === 0) { // we have a note off message that matches our last note on message
      if (delta > 0.5) { // if it was pressed long, shift by one octave
        console.log('LONG PRESS')
        sendMessage([status, data0 + 12, 100])
        sendMessage([status, data0 + 12, data1])
      } else if (this.lastNoteMessage) { // if not, send the original message (delayed)
        console.log('SENDING ORIGINAL')
        sendMessage(this.lastNoteMessage)
        sendMessage([this.lastNoteMessage[0], this.lastNoteMessage[1], 0])
      }

      return
    }

    if (data1 === 100) { // we have a new note on message
      this.lastNoteMessage = [status, data0, data1]
      console.log("IT'S A NOTE ON, DELAYING UNTIL NOTE OFF")
    }
  }
}

export default class Run extends Command {
  static description = 'Process midi messages for a device'

  static examples = ['$ oex run --device X-TOUCH MINI']

  static args = {
    deviceName: Args.string({
      description: 'The name of the device for which to listen for midi messages',
      required: true,
    }),
  }

  static flags = {
    channel: Flags.integer({
      description: 'The channel on which to listen to',
      required: false,
    }),
  }

  async run(): Promise<void> {
    const {args: {deviceName}, flags: {channel}} = await this.parse(Run)

    const input = new Input()

    let port = null
    for (let i = 0; i < input.getPortCount(); i++) {
      if (input.getPortName(i) !== deviceName) continue

      port = i
      break
    }

    if (port === null) {
      this.error(`Could not find device "${deviceName}"`)
      this.exit(127)
    }

    const output = new Output()
    output.openVirtualPort('midiphil')

    const processor = new Processor()
    const sendMessage: Output['sendMessage'] = message => {
      this.log(`Send: ${message}`)
      output.sendMessage(message)
    }

    input.on('message', (delta, message) => {
      if (channel !== undefined && channel !== (message[0] & 0x0F)) {
        this.log(`Ignored message on channel ${message[0] & 0x0F}`)
        return
      }

      if (delta > 1) this.log('')
      this.log(`Receive: ${message} (${delta})`)
      processor.process(delta, message, sendMessage)
    })
    input.openPort(port)

    this.log(`Listening on ${deviceName}...\n`)
  }
}

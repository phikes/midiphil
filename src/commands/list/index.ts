import {Command} from '@oclif/core'
import {Input} from 'midi'

export default class List extends Command {
  static description = 'List all available devices'

  static examples = ['$ oex list']

  async run(): Promise<void> {
    const input = new Input()

    for (let i = 0; i < input.getPortCount(); i++) {
      this.log(input.getPortName(i))
    }
  }
}

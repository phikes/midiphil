oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g midiphil
$ midiphil COMMAND
running command...
$ midiphil (--version)
midiphil/0.0.0 darwin-arm64 node-v18.16.1
$ midiphil --help [COMMAND]
USAGE
  $ midiphil COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`midiphil hello PERSON`](#midiphil-hello-person)
* [`midiphil hello world`](#midiphil-hello-world)
* [`midiphil help [COMMANDS]`](#midiphil-help-commands)
* [`midiphil plugins`](#midiphil-plugins)
* [`midiphil plugins:install PLUGIN...`](#midiphil-pluginsinstall-plugin)
* [`midiphil plugins:inspect PLUGIN...`](#midiphil-pluginsinspect-plugin)
* [`midiphil plugins:install PLUGIN...`](#midiphil-pluginsinstall-plugin-1)
* [`midiphil plugins:link PLUGIN`](#midiphil-pluginslink-plugin)
* [`midiphil plugins:uninstall PLUGIN...`](#midiphil-pluginsuninstall-plugin)
* [`midiphil plugins:uninstall PLUGIN...`](#midiphil-pluginsuninstall-plugin-1)
* [`midiphil plugins:uninstall PLUGIN...`](#midiphil-pluginsuninstall-plugin-2)
* [`midiphil plugins update`](#midiphil-plugins-update)

## `midiphil hello PERSON`

Say hello

```
USAGE
  $ midiphil hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/phikes/midiphil/blob/v0.0.0/dist/commands/hello/index.ts)_

## `midiphil hello world`

Say hello world

```
USAGE
  $ midiphil hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ midiphil hello world
  hello world! (./src/commands/hello/world.ts)
```

## `midiphil help [COMMANDS]`

Display help for midiphil.

```
USAGE
  $ midiphil help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for midiphil.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.10/src/commands/help.ts)_

## `midiphil plugins`

List installed plugins.

```
USAGE
  $ midiphil plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ midiphil plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `midiphil plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ midiphil plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ midiphil plugins add

EXAMPLES
  $ midiphil plugins:install myplugin 

  $ midiphil plugins:install https://github.com/someuser/someplugin

  $ midiphil plugins:install someuser/someplugin
```

## `midiphil plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ midiphil plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ midiphil plugins:inspect myplugin
```

## `midiphil plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ midiphil plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ midiphil plugins add

EXAMPLES
  $ midiphil plugins:install myplugin 

  $ midiphil plugins:install https://github.com/someuser/someplugin

  $ midiphil plugins:install someuser/someplugin
```

## `midiphil plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ midiphil plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ midiphil plugins:link myplugin
```

## `midiphil plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ midiphil plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ midiphil plugins unlink
  $ midiphil plugins remove
```

## `midiphil plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ midiphil plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ midiphil plugins unlink
  $ midiphil plugins remove
```

## `midiphil plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ midiphil plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ midiphil plugins unlink
  $ midiphil plugins remove
```

## `midiphil plugins update`

Update installed plugins.

```
USAGE
  $ midiphil plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

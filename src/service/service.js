'use strict';

const chalk = require(`chalk`);
const {Cli, availableCommands} = require(`./cli`);
const {ExitCode, DEFAULT_USER_COMMAND} = require(`./constants`);

const USER_ARGV_INDEX = 2;

const userArguments = process.argv.slice(USER_ARGV_INDEX);
const [requestedCommand] = userArguments;
const command = availableCommands.includes(requestedCommand) ? requestedCommand : DEFAULT_USER_COMMAND;
const commandArguments = userArguments.slice(1);

const run = async () => {
  try {
    await Cli[command].run(commandArguments);
  } catch (err) {
    console.log(chalk.red(err.message));
    process.exit(ExitCode.failed);
  }
};

run();

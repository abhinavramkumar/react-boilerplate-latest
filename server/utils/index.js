const chalk = require("chalk");

const debug = str => {
  console.log(chalk.greenBright(str));
};

const info = str => {
  console.log(chalk.cyanBright(str));
};

const warn = str => {
  console.log(chalk.yellowBright(str));
};

const error = str => {
  console.log(chalk.redBright(str));
};

const data = d => {
  console.log(d);
};

module.exports = {
  debug,
  info,
  warn,
  error,
  data
};

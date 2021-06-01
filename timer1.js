/*
Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
*/
const process = require('process');

const timer = function() {

  const args = process.argv.slice(2);
  if (args.length === 0) {
    process.exit;
  }
  for (let arg of args) {
    if (!isNaN(arg)) {
      if (Number(arg) < 0) {
        continue;
      }
      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(arg) * 1000);
    }
  }
};

timer();
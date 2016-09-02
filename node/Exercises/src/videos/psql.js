'use strict';

const spawn = require('child_process').spawn;

module.exports = psql

function psql(dbName, command) {
  return runCommand('psql', [dbName, '-c', command])
}

function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args);
    process.stdout.setEncoding('utf8');
    process.stdout.on('data', console.log);
    process.stderr.setEncoding('utf8');
    process.stderr.on('data', console.log);
    process.on('close', resolve);
    process.on('error', reject);
  })
}

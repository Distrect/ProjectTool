import { spawn } from 'child_process';

console.log('dklsdfa');

const process = spawn('');

process.on('message', (mes) => {
  console.log(mes);
});

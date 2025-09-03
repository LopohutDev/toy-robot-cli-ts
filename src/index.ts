import * as readline from 'readline';
import { Simulator } from './simulator';

const simulator = new Simulator();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Toy Robot CLI');
console.log('Valid commands: PLACE X,Y,F, MOVE, LEFT, RIGHT, REPORT');
console.log('Enter commands:');

rl.on('line', (input: string) => {
  const output = simulator.execute(input);
  if (output) {
    console.log(output);
  }
});

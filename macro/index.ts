import { random, buildAt } from './macro.ts' with { type: 'macro' };

console.log(`Your random number is ${random()}`);
console.log(`buildAt: ${buildAt()}`);

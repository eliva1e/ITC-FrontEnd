import type { Command } from '../types';

export const add: Command = {
  accept(...argv) {
    const [name] = argv;
    return argv.length === 2 && name === 'add';
  },
  run() {
    return true;
  },
  description: 'add [long title]: add new task',
};

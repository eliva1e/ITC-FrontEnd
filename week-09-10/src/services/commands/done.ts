import type { Command } from '../types';

export const done: Command = {
  accept(...argv) {
    const [name] = argv;
    return argv.length === 2 && name === 'done';
  },
  run() {
    return true;
  },
  description: 'done [task-id]: complete task',
};

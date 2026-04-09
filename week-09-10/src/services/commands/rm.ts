import type { Command } from '../types';

export const rm: Command = {
  accept(...argv) {
    const [name] = argv;
    return argv.length === 2 && name === 'rm';
  },
  run() {
    return true;
  },
  description: 'rm [task-id]: remove task',
};

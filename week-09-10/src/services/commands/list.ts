import type { Command } from '../types';

export const list: Command = {
  accept(...argv) {
    const [name, all] = argv;
    return argv.length <= 2 && ['ls', 'list'].includes(name) && ['-a', undefined].includes(all);
  },
  run() {
    return false;
  },
  description: 'ls, list [-a]: list available [all] todo tasks',
};

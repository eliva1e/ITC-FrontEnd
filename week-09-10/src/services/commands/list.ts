import type { Command } from '../types';

export const list: Command = {
  accept(...argv) {
    const [name, all] = argv;
    return argv.length <= 2 && ['ls', 'list'].includes(name) && ['-a', undefined].includes(all);
  },
  run(manager, ...argv) {
    const showAll = argv[1] === '-a';

    for (const t of manager.availableTasks()) {
      if (showAll) {
        console.log(`${t.id} ${t.complete ? '[DONE]' : '[TODO]'} ${t.title}`);
      } else if (!t.complete) {
        console.log(`${t.id} [TODO] ${t.title}`);
      }
    }

    return false;
  },
  description: 'ls, list [-a]: list available [all] todo tasks',
};

import { TaskManager } from './models/TaskManager';

// Saving

console.log('Saving:');

const tm = new TaskManager();

const id = tm.addTask('Hello');
tm.addTask('Goodbye');
tm.closeTask(id);

console.log(tm.availableTasks());

tm.save('todo.json');

// Reading

console.log('\nReading:');

(async () => {
  await tm.load('todo.json');
  console.log(tm.availableTasks());
})();

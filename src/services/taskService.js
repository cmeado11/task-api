import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completed) {
  let completedFilter;

  if (completed === 'true') {
    completedFilter = true;
  } else if (completed === 'false') {
    completedFilter = false;
  } else {
    completedFilter = undefined;
  }

  return taskRepository.findAll(completedFilter);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}

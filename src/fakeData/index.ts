import { ITask } from "../interfaces/ITask";

export const INITIAL_TASKS: ITask[] = [
  {
    id: 0,
    boardId: 'ToDo',
    title: 'Task A',
  },
  {
    id: 1,
    boardId: 'ToDo',
    title: 'Task B',
  },
  {
    id: 2,
    boardId: 'In Progress',
    title: 'Task C',
  },
];

export const boardLists = ['ToDo', 'In Progress', 'Done'];
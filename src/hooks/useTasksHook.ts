import { useState } from "react";
import { boardLists, INITIAL_TASKS } from "../fakeData";

export default function useTasksHook() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const moveTask = (taskId: number, direction: 'up' | 'down' | 'left' | 'right') => {
    setTasks(prevTasks => {
      const taskIndex = prevTasks.findIndex(task => task.id === taskId);
      if (taskIndex === -1) return prevTasks;
      const newTasks = [...prevTasks];
      const task = newTasks[taskIndex];
      const boardIndex = boardLists.indexOf(task.boardId)
      switch (direction) {
        case 'up':
          if (taskIndex === 0) return newTasks;
          [newTasks[taskIndex], newTasks[taskIndex - 1]] = [newTasks[taskIndex - 1], newTasks[taskIndex]];
          break;
        case 'down':
          if (taskIndex === newTasks.length - 1) return newTasks;
          [newTasks[taskIndex], newTasks[taskIndex + 1]] = [newTasks[taskIndex + 1], newTasks[taskIndex]];
          break;
        case 'left':
          if (boardIndex == 0) return newTasks
          newTasks.push({
            ...task,
            boardId: boardLists[boardIndex - 1]
          })
          newTasks.splice(taskIndex, 1);
          break;
        case 'right':
          if (boardIndex == boardLists.length) return newTasks
          newTasks.push({
            ...task,
            boardId: boardLists[boardIndex + 1]
          })
          newTasks.splice(taskIndex, 1);
          break;
        default:
          return prevTasks;
      }

      return newTasks;
    });
  };
  const createTask = (title: string) => {
    setTasks(prev => [...prev, {
      id: prev.length,
      boardId: 'ToDo',
      title
    }])
  }
  return {
    tasks,
    moveTask,
    createTask
  }
}
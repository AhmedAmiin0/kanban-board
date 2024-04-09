import React, { createContext, PropsWithChildren } from "react";
import useTasksHook from "../hooks/useTasksHook";
type TasksContextType = ReturnType<typeof useTasksHook>
const TaskContext = createContext<TasksContextType>({} as TasksContextType)
const TasksProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const tasksHook = useTasksHook()
  return (
    <TaskContext.Provider value={tasksHook}>
      {children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;
export { TaskContext };
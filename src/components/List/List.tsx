import { ITask } from "../../interfaces/ITask";
import CreateNewTask from "../CreateNewTask/CreateNewTask";
import { Task } from "../Task";
import { ListProps } from "./ListProps.type";

export function List({ title, tasks }: ListProps) {
  return (
    <div className="flex flex-col justify-between h-full w-full overflow-auto">
      <h3 className="text-2xl font-bold mb-4 text-center ">{title}</h3>
      <div className='w-full border border-black h-full py-[11px] px-2'>
        {tasks.map((task: ITask, index: number) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            canMoveUp={index !== 0}
            canMoveDown={index !== tasks.length - 1}
          />
        ))}
        {title === 'ToDo' && <CreateNewTask />}
      </div>
    </div>

  );
}

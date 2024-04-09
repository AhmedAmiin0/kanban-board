import { boardLists } from "../../fakeData";
import { List } from "../List";
import useTaskContext from "../../hooks/useTaskContext";

export function Board() {
  const { tasks } = useTaskContext()
  return (
    <div className='w-full flex h-screen items-center justify-center'>
      <div className='flex gap-4 h-4/5 w-3/5 -mb-10'>
        {boardLists.map(list => (
          <List
            key={list}
            title={list}
            tasks={tasks.filter(task => task.boardId === list)}
          />
        ))}
      </div>
    </div>
  );
}
import useTaskContext from "../../hooks/useTaskContext";
import { TaskProps } from "./TaskProps.type";


export function Task({ id, title, canMoveUp, canMoveDown }: TaskProps) {
  const { moveTask } = useTaskContext()
  return (
    <div className='task bg-white shadow-md rounded p-4 mb-2 border border-black'>
      <div className="font-normal text-lg">{title}</div>
      <div className="flex justify-end mt-2 text-black">
        <button onClick={() => moveTask(id, 'up')} className={`btn ${!canMoveUp && 'btn-disabled'}`} disabled={!canMoveUp}>⇧</button>
        <button onClick={() => moveTask(id, 'down')} className={`btn ${!canMoveDown && 'btn-disabled'}`} disabled={!canMoveDown}>⇩</button>
        <button onClick={() => moveTask(id, 'left')} className="btn">⇦</button>
        <button onClick={() => moveTask(id, 'right')} className="btn">⇨</button>
      </div>
    </div>
  );
}
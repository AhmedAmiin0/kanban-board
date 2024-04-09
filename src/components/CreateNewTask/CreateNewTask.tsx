import { useState } from "react"
import useTaskContext from "../../hooks/useTaskContext"

export default function CreateNewTask() {
  const { createTask } = useTaskContext()
  const [text, setText] = useState('')
  const handleCreateTask = () => {
    if (!text) return
    createTask(text)
    setText('')
  }
  return (
    <div className='task bg-white shadow-md rounded p-4 mb-2 border border-black '>
      <h6>
        Create new Task
      </h6>
      <label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <div className={`text-end`}>
        <button
          onClick={handleCreateTask}
        >
          ✔
        </button>
      </div>
    </div>
  )
}

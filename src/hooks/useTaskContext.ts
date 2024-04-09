import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export default function useTaskContext() {
  const taskContext = useContext(TaskContext)
  return taskContext
}

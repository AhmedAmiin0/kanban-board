import { Board } from './components/Board';
import TasksProvider from './context/TaskContext';



function App() {
  return (
    <TasksProvider>
      <Board />
    </TasksProvider>
  )

}

export default App

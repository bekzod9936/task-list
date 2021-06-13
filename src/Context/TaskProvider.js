import React , {useState} from 'react';

export const TaskList=React.createContext();

const TaskProvider = ({children}) => {
  const [task, setTask] = useState([])
  return (
    <TaskList.Provider value={[task, setTask]}>
      {children}
    </TaskList.Provider>
  )
}

export default TaskProvider

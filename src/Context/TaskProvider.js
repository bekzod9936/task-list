import React , {useState , useEffect} from 'react';
import axios from 'axios';
export const TaskList=React.createContext();

const TaskProvider = ({children}) => {
  const [task , setTask] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3004/tasks')
          .then(res => { setTask(res.data)})
          .catch(err=> console.log(err));
  }, [])
  
  return (
    <TaskList.Provider value={[task, setTask]}>
      {children}
    </TaskList.Provider>
  )
}

export default TaskProvider

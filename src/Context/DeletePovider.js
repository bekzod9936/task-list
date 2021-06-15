import React , {createContext, useState , useEffect} from 'react';
import axios from 'axios';
export const DeleteTask=createContext();
const DeletePovider = ({children}) => {
  const [deletetask, setDelete] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3004/deletetasks')
    .then(res => setDelete(res.data))
    .catch(err =>console.log(err))
  }, [])
  return (
    <DeleteTask.Provider value={[deletetask , setDelete] }>
      {children}
    </DeleteTask.Provider>
  )
}

export default DeletePovider

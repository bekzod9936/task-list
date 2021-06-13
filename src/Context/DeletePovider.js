import React , {createContext, useState} from 'react'
export const DeleteTask=createContext();
const DeletePovider = ({children}) => {
  const [deletetask, setDelete] = useState([])
  return (
    <DeleteTask.Provider value={[deletetask , setDelete] }>
      {children}
    </DeleteTask.Provider>
  )
}

export default DeletePovider

import React, { createContext , useState} from 'react';
export const EditTask=createContext();


const EditProvider = ({children}) => {
  const [edit, setEdit] = useState('')
  return (
    <EditTask.Provider value={[edit, setEdit]}>
      {children}
    </EditTask.Provider>
  )
}

export default EditProvider

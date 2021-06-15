import React, { createContext,  useState } from 'react';
export const ResultTasks=createContext();


const ResultProvider = ({children}) => {
  const [result, setResult] = useState({
    task: 0,
    donetask: 0,
  })
  return (
    <ResultTasks.Provider value={[result, setResult] }>
      {children}
    </ResultTasks.Provider>
  )
}

export default ResultProvider

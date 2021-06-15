import React from 'react';
import TaskProvider from './TaskProvider';
import DeleteProvider from './DeletePovider';
import EditProvider from './EditProvider';
import ResultProvider from './ResultProvider';
const Context = ({children}) => {
  return (
    <TaskProvider>
      <DeleteProvider>
        <EditProvider>
          <ResultProvider>
              {children}
          </ResultProvider>
        </EditProvider>
      </DeleteProvider>
    </TaskProvider>
  )
}

export default Context

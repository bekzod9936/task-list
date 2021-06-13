import React, { useContext, useEffect , useState} from 'react'
import { Container, Bar, Div} from "./style";
import { TaskList } from "../../../Context/TaskProvider";
import { DeleteTask } from '../../../Context/DeletePovider';
import { ResultTasks } from "../../../Context/ResultProvider";
const Progress = () => {
  const [task, setTask] = useContext(TaskList);
  const [deletetask, setDelete] = useContext(DeleteTask);
  const [result, setResult] = useContext(ResultTasks);
  const [score , setScore] =useState(0)
  useEffect(() => {
    const res = {
      task: (task.length * 100) / (deletetask.length + task.length),
      donetask: (deletetask.length * 100) / (deletetask.length + task.length),
    }
    setScore(res)
  }, [task , deletetask ]);
  setResult(score)
  return (
    <Container color={result.task ? 'red' : 'lightgrey'  }>
      <Bar width={result.donetask ? result.donetask : '0'}>{result.donetask ? result.donetask % 2 === 0 || result.donetask % 5 === 0 ? `${result.donetask}%` : `${result.donetask.toFixed(2)}%` : ''}</Bar><Div width={result.task ? `${result.task}%` : '0'}>{result.task ? result.task % 2 === 0 || result.task % 5 === 0 ? `${result.task}%` : `${result.task.toFixed(2)}%` : ''}</Div>
    </Container>
  )
}

export default Progress

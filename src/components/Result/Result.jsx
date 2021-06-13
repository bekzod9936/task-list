import React , {useContext} from 'react'
import { Container, Div } from './style';
import { ResultTasks} from '../../Context/ResultProvider'
const Result = () => {
  const [result, setResult] = useContext(ResultTasks)
  return (
    <Container>
      <Div color='red'>Tasks-{result.task ? result.task % 2 === 0 || result.task % 5 === 0 ? result.task : result.task.toFixed(2) : '0'}%</Div>
      <Div color='blue'>Done Tasks-{result.donetask ? result.donetask % 2 === 0 || result.donetask % 5 === 0 ? result.donetask : result.donetask.toFixed(2): '0'}%</Div>
    </Container>
  )
}

export default Result

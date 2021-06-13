import React , {useContext} from 'react';
import Progress from "./Progress/Progress";
import { Container, Inputt, Form, Button} from "./style";
import {TaskList} from '../../Context/TaskProvider';
import { EditTask } from '../../Context/EditProvider'
const Input = () => {
  const [task ,setTask] = useContext(TaskList);
  const [edit, setEdit]  = useContext(EditTask)
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(edit=== ''){
      const newtask = {
        id: Date.now(),
        name: e.target.task.value,
      }
      setTask([...task, newtask]);
    } else {
      const edittask=task.map(v =>{ if(v.id === edit.id){return {id: edit.id , name: e.target.task.value}} else {return v} });
      setTask(edittask);
      setEdit('')
    }
    
    e.target.reset();
  }
  const handleChange=()=>{

  }
  return (
    <Container>
        <Form onSubmit={handleSubmit}>
        <Inputt type='text' defaultValue={edit.name || null} onChange={handleChange} name='task' placeholder='Enter your tasks...' /><Button type='submit' color= {edit.name ? 'orange' : 'blue'} >
          {
            edit.name ? 'Update' : 'Add'
          }
          </Button>
        </Form>
      <Progress />
    </Container>
  )
}

export default Input

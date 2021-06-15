import React, { useContext } from 'react';
import { FaCheckSquare, FaEdit } from "react-icons/fa";
import { Container, Table} from '../style';
import { TaskList } from '../../../Context/TaskProvider';
import { DeleteTask } from '../../../Context/DeletePovider';
import { EditTask } from '../../../Context/EditProvider';
import Tasks from './Tasks';
import axios from 'axios';
const NewTask = () => {
  const [task , setTask] = useContext(TaskList);
  const [deletetask, setDelete] = useContext(DeleteTask);
  const [edit, setEdit] = useContext(EditTask);
  const handleCheck=(id)=>{
      const checktask=task.filter(v=> v.id === id);
    axios.delete(`http://localhost:3004/tasks/${id}`)
      .then(setTask(task.filter(v => v.id !== id)))
    axios.post('http://localhost:3004/deletetasks', checktask[0])
      .then(setDelete([...deletetask, checktask[0]]))
  }
  const handleEdit = (id) => {
    const edittask=task.filter(v => v.id === id)
    setEdit(edittask[0])
  }
  return (
    <Container>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Tasks</Table.Th>
            <Table.Th><FaCheckSquare /></Table.Th>
            <Table.Th><FaEdit /></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
           {
             task.map(( v , i) => <Tasks edit={handleEdit} value={v}  check={handleCheck} index={i} key={v.id} />)
           }
        </Table.Tbody>
      </Table>
    </Container>
  )
}

export default NewTask

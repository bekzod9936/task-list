import React , {useContext} from 'react'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Container, Table } from "./style";
import { DeleteTask} from '../../Context/DeletePovider'
import DoneTasks from './DoneTasks';
const OldTask = () => {
  const [deletetask, setDelete] = useContext(DeleteTask);
  const handleDelete=(id)=>{
  const newDelete=deletetask.filter(v => v.id !== id);
  setDelete(newDelete);
  }
  return (
    <Container>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Done Tasks</Table.Th>
            <Table.Th><RiDeleteBin2Fill /></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {
            deletetask.map((v, i) => <DoneTasks deletee={handleDelete} value={v} index={i} key={v.id} /> )
          }
        </Table.Tbody>
      </Table>
    </Container>
  )
}

export default OldTask

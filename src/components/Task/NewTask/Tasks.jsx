import React  from 'react';
import { Table, Button } from '../style';
const Tasks = ({edit , value , check , index}) => {
  return (
    <Table.Tr>
      <Table.Td>{index+1}</Table.Td>
      <Table.Td>{value.name}</Table.Td>
      <Table.Td><input onChange={()=>check(value.id)} type='checkbox' /></Table.Td>
      <Table.Td><Button color='orange' onClick={() => edit(value.id)}>Edit</Button></Table.Td>
    </Table.Tr>
  )
}

export default Tasks

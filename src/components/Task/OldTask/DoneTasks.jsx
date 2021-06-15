import React from 'react';
import { Table, Button } from '../style';
const DoneTasks = ({deletee ,value , index}) => {
  return (
    <Table.Tr>
      <Table.Td>{index+1}</Table.Td>
      <Table.Td>{value.name}</Table.Td>
      <Table.Td><Button color='red' onClick={() => deletee(value.id)}>Delete</Button></Table.Td>
    </Table.Tr>
  )
}

export default DoneTasks

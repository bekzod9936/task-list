import styled from 'styled-components';

export const Container = styled.div`
width: 49%;
`;

export const Table = styled.table`
width: 100%;
border-bottom: 1px solid;
border-collapse: collapse;
`;
Table.Thead = styled.thead`
border-bottom: 1px solid;
`;
Table.Tbody = styled.tbody`
border-bottom: 1px solid;
`;
Table.Tr = styled.tr`
border-bottom: 1px solid;
text-align: center;
:nth-child(even){
  background-color: lightgray;
}
`;
Table.Th = styled.th`
border-bottom: 1px solid;
padding: 10px 0;
`;
Table.Td = styled.td`
border-bottom: 1px solid;
padding: 10px 0;
`;
export const Button=styled.button`
background-color: ${props => props.color};
color: white;
padding:5px 10px ;
border-radius: 3px;
`;

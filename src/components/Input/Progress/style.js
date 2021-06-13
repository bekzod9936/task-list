import styled from 'styled-components';

export const Container = styled.div`
width:100%;
background-color: ${props => props.color};
height: 20px;
border-radius: 10px;
margin: 20px 0 0;
display: flex;
/* justify-content: ${props => props.color==='red' ? 'center' : 'space-between'}; */
align-items: center;
`;

export const Bar=styled.div`
width:${props => `${props.width}%`};
height: 100%;
border-radius: ${props => props.width === 100 ? '10px' : '10px 0 0 10px' } ;
background-color: blue;
display: flex;
justify-content: center;
align-content: center;
color:white;
`;
export const Div = styled.div`
display: flex;
justify-content: center;
align-content: center;
width:${props => props.width};
color:white;
`;


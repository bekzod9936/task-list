import styled from 'styled-components';

export const Container=styled.div`
width: 100%;
display: flex;
padding: 10px 10px 0;
`;
export const Div=styled.div`
background-color: ${props => props.color};
color: white;
padding: 1px 5px;
width: fit-content;
font-size: 16px;
border-radius: 3px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;
`;
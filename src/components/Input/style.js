import styled from 'styled-components';

export const Container = styled.div`
width: 60vw;
margin: 0 auto;
`;
export const Form=styled.form`
display: flex;
justify-content: space-between;
width: 100%;
`;
export const Inputt=styled.input`
width: 80%;
border-radius: 5px;
outline: none;
padding: 3px 5px;
border-color: lightgray;
font-size: 14px;
`;
export const Button=styled.button`
color: white;
background-color: ${props => props.color};
border-radius: 5px;
width: 15%;
height: 35px;
`;
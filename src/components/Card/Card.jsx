import React  from 'react';
import { Container, Wrapper , Wrap } from './style';
import Input from '../Input/Input'
import NewTask from '../NewTask/NewTask';
import OldTask from '../OldTask/OldTask';
import Result from '../Result/Result';
const Card = () => {
  return (
    <Wrap>
    <Container>
      <Input />
      <Wrapper>
        <NewTask />
        <OldTask />
      </Wrapper>
      <Result />
    </Container>
    </Wrap>
  )
}

export default Card

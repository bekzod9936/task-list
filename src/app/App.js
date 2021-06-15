import React, { useEffect }  from 'react';
import Card from '../components/Card/Card';
import { Container} from './style';
const App = () => {
  useEffect(() => {
   setTimeout(() => {
     alert('Please npm run json:server , before using this app in order to connect fake server !!!!! ')
   }, 2000);
  }, [])
  return (
    <Container>
     <Card />
    </Container>
  )
}

export default App

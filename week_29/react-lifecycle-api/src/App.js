import logo from './logo.svg';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import ClassCard from './components/ClassCard';
import ClassUsers from './components/ClassUsers';
import FunctionUsers from './components/FunctionUsers';

function App() {
  return (
    <Container>
      <Row>
        <ClassUsers />
        <FunctionUsers />
      </Row>
    </Container>
  );
}

export default App;

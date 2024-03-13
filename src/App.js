import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import StudentMaster from './reducer/StudentMaster';

function App() {
  return (
    <div className="App">
      <Container>
        <StudentMaster />
      </Container>
    </div>
  );
}

export default App;

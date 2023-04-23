import logo from './logo.svg';
import './App.css';
import FunctionCounter from './components/FunctionCounter';
import ClassCounter from './components/ClassCounter';

function App() {
  return (
    <div className='big'>
     <FunctionCounter/>
     <ClassCounter/>
    </div>
  );
}

export default App;

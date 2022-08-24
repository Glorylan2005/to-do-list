import pen from './pen.png';
import './App.css';
import { Todolist } from './Todolist';


function App() {
  return (
    <div className="App" >
      <div className='container'>
      <h1>To Do List</h1>
      </div>
      <div>
        <Todolist />
      </div>
      <div className='container'>
        <img className='imagepen' src={pen} alt="pen" width="400px"/>
      </div>
    </div>
  );
}

export default App;

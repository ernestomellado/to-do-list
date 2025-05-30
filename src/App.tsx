import './App.css'
import {useTaskStore} from "./store/useTaskStore"
import { useState } from 'react';

function App() {
  
const task = useTaskStore((state)=>state);

const [arrayTask, setArrayTask] = useState(["task1", "task2"]);

const addTask = ()=>{
    setArrayTask([...arrayTask, "new array"]);
}

console.log(arrayTask);
  return (
    <>
    <div>
      <div>
        <h1>To do List App</h1>
      </div>
      <div>
        <ul>
          {arrayTask.map(arrayTask =>(
            <li key={arrayTask}>
              <p><input type='checkbox'/>{arrayTask}<button>Eliminar</button></p>
            </li>
          ))}
         
        </ul>
        <div>
          <button onClick={addTask}>agregar nueva tarea</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

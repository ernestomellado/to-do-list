import './App.css'
import {useTaskStore} from "./store/useTaskStore"
import { useState } from 'react';

function App() {
  
const task = useTaskStore((state)=>state);


const [arrayTask, setArrayTask] = useState([{id:125, title:"primera tarea", taskStatus:true}]);

const addTask = (value:number)=>{
    setArrayTask([...arrayTask, {id:value, title:"nueva tarea"}]);
}

const deleteTask = (value:number)=>{
    const nuevoArray = arrayTask.filter((arrayTask) => arrayTask.id !== value);
    setArrayTask(nuevoArray);
}

const toggleTask = (value) => {
  

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
            <li key={arrayTask.id} >
              <p><input onChange={()=>{toggleTask(arrayTask.id)}} type='checkbox'/ >{arrayTask.title}<button onClick={()=>deleteTask(arrayTask.id)}>Eliminar</button></p>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={()=>addTask(arrayTask.length)}>agregar nueva tarea</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

import './App.css'
import {useTaskStore} from "./store/useTaskStore"
import { useState } from 'react';

function App() {
  
const task = useTaskStore((state)=>state);


const [arrayTask, setArrayTask] = useState([{id:125, title:"primera tarea", taskStatus:false}]);

const addTask = (value:number)=>{
    setArrayTask([...arrayTask, {id:value, title:"nueva tarea", taskStatus:false}]);
}

const deleteTask = (value:number)=>{
    const nuevoArray = arrayTask.filter((arrayTask) => arrayTask.id !== value);
    setArrayTask(nuevoArray);
}

const toggleTask = (value:number) => {
  console.log("imprimir value con el click", value)
 

  const pickTask = arrayTask.filter((array) => array.id === value);
 
  if(pickTask.length > 1){
    let resultToogleTask = arrayTask.map((task) =>{
      task.id === value ? {...task, taskStatus: !task.taskStatus}: task
    })  
    console.log("resultToogleTask", resultToogleTask)
  }
  console.log(pickTask);
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
              <p><input onChange={()=>{toggleTask(arrayTask.id)}} type='checkbox'/ ><span className={arrayTask.taskStatus ? 'line-through text-gray-400' : ''}>{arrayTask.title}</span><button onClick={()=>deleteTask(arrayTask.id)}>Eliminar</button></p>
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

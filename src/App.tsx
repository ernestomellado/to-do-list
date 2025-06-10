import './App.css'
import {useTaskStore} from "./store/useTaskStore"


function App() {
  
const arrayTaskZustand = useTaskStore((state)=>state.arrayTask);
const addTaskZustand = useTaskStore((state) => state.addTask);
const deleteTaskZustand = useTaskStore((state) => state.deleteTask);



/*
const deleteTask = (value:number)=>{
    const nuevoArray = arrayTask.filter((arrayTask) => arrayTask.id !== value);
    setArrayTask(nuevoArray);
}

const toggleTask = (value:number) => {

  const pickTask = arrayTask.filter((array) => array.id === value);
 
  if(pickTask){
    let resultToogleTask = arrayTask.map((task) =>{
       let save = task.id === value ? { ...task, taskStatus: !task.taskStatus} : task
       return save
    })  
    setArrayTask(resultToogleTask);
  }
  console.log("pickTask", pickTask);
}
*/
  return (
    <>
    <div>
      <div>
        <h1>To do List App</h1>
      </div>
      <div>
        <ul>
          {arrayTaskZustand.map(arrayTask =>(
            <li key={arrayTask.id} >
              <p><input onChange={()=>{toggleTask(arrayTask.id)}} type='checkbox'/ ><span className={arrayTask.taskStatus ? 'line-through text-gray-400' : ''}>{arrayTask.title}</span><button onClick={()=>deleteTaskZustand(arrayTask.id)}>Eliminar</button></p>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={()=>addTaskZustand(arrayTaskZustand.length)}>agregar nueva tarea</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

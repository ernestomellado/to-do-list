import { create } from 'zustand'

interface Task {
  deleteTask: any
  addTask: any
  arrayTask : [{
    id:number, 
    title: string
    taskStatus: boolean
  }]
}

export const useTaskStore = create<Task>((set) => ({
  arrayTask: [{id:125, title:"primera tarea", taskStatus:false}],
  deleteTask: (value:numer) =>  {
      const newArray= arrayTask.filter((arrayTask) => arrayTask.id !== value);
      set((state)=>({
        arrayTask:[newArray]
      })
  }
  addTask:(value:number) => set((state) => ({ 
    arrayTask: [...state.arrayTask, {id:value, title:"nuevo array", taskStatus:false}]
  }))
  
  

}))
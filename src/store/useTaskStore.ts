import { create } from 'zustand'

interface Task {
  addTask: any
  arrayTask : {
    id:number, 
    title: string
    taskStatus: boolean
  }
}

export const useTaskStore = create<Task>((set) => ({
  arrayTask: {id:125, title:"primera tarea", taskStatus:false},
  addTask:(value:number) => set(state => ({ arrayTask: {...state.arrayTask , id:value, title:"segunda", taskStatus:false} }))
  

}))
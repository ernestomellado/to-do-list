import { create } from 'zustand'

interface Task {
  arrayTask : {
    id:number, 
    title: string
    taskStatus: boolean}
}

export const useTaskStore = create<Task>()(() => ({
  arrayTask: {id:125, title:"primera tarea", taskStatus:false}
}))
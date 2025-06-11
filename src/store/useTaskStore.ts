import { create } from 'zustand'

interface Task {
  addTask: any,
  deleteTask:any,
  toggleTask:any
  arrayTask : [{
    id:number, 
    title: string
    taskStatus: boolean
  }]
}
export const useTaskStore = create<TaskStore>((set) => ({
  arrayTask: [{ id: 125, title: "primera tarea", taskStatus: false }],
  
  deleteTask: (value) =>
    set((state) => ({
      arrayTask: state.arrayTask.filter((task) => task.id !== value)
    })),

    toggleTask: (value) =>{
      set((state) => ({
      arrayTask:  state.arrayTask.filter((array) => array.id === value) ?  [] : []
    }))

    }
    ,

  addTask: (value) =>
    set((state) => ({
      arrayTask: [
        ...state.arrayTask,
        {
          id: value,
          title: "nuevo_array",
          taskStatus: false,
        }
      ]
    }))
}))

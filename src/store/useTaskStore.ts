import { create } from 'zustand'

interface Task {
  id: string
  title: string
  completed: boolean
  task: string[]
}

export const useTaskStore = create<Task>()(() => ({
  id: "1511",
  title: "tarea 1",
  completed: false,
  task :["task1", "task2"]
}))
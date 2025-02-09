import { useCallback } from 'react'

const TASKS_STORAGE_KEY = 'tasks'

export function useGetAllTasks() {
  return useCallback(async () => {
    return new Promise<Models.TaskItem[]>((resolve) => {
      setTimeout(() => {
        const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY)
        const tasksList = storedTasks ? JSON.parse(storedTasks) : []
        resolve(tasksList)
      }, 0)
    })
  }, [])
}

export function usePostTask() {
  return useCallback(async (description: string) => {
    return new Promise<Models.TaskItem[]>((resolve) => {
      setTimeout(() => {
        const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY)
        const tasksList = storedTasks ? JSON.parse(storedTasks) : []

        const newTask = {
          id: crypto.randomUUID(),
          order: tasksList.length,
          description,
          checked: false
        }

        tasksList.push(newTask)
        localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasksList))
        resolve(tasksList)
      }, 0)
    })
  }, [])
}

export function usePatchTask() {
  return useCallback(
    async (
      id: string,
      { checked, description }: { checked?: boolean; description?: string }
    ) => {
      return new Promise<Partial<Models.TaskItem>>((resolve) => {
        const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY)
        const tasksList = storedTasks ? JSON.parse(storedTasks) : []

        const taskIndex = tasksList.findIndex(
          (task: Models.TaskItem) => task.id === id
        )
        if (taskIndex === -1) return resolve(tasksList)

        if (checked !== undefined) {
          tasksList[taskIndex].checked = checked
        }
        if (description) {
          tasksList[taskIndex].description = description
        }

        localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasksList))
        resolve(tasksList)
      })
    },
    []
  )
}

export function useDeleteTask() {
  return useCallback(async (id: string) => {
    return new Promise<Models.TaskItem[]>((resolve) => {
      setTimeout(() => {
        const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY)
        const tasksList = storedTasks ? JSON.parse(storedTasks) : []

        const taskIndex = tasksList.findIndex(
          (task: Models.TaskItem) => task.id === id
        )
        if (taskIndex === -1) return resolve(tasksList)

        tasksList.splice(taskIndex, 1)
        localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasksList))
        resolve(tasksList)
      }, 1000)
    })
  }, [])
}

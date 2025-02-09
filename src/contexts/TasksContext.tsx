import Loader from '@/components/Loader/Loader'
import {
  useGetAllTasks,
  usePostTask,
  usePatchTask,
  useDeleteTask
} from '@/services/tasks.service'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

const TasksContext = createContext<Context.TasksContext | undefined>(undefined)

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [tasks, setTasks] = useState<Models.TaskItem[]>([] as Models.TaskItem[])
  const getTasks = useGetAllTasks()
  const postNewTask = usePostTask()
  const patchTask = usePatchTask()
  const deleteTask = useDeleteTask()

  const fetchTasks = async () => {
    try {
      setIsLoading(true)
      const fetchedTasks = await getTasks()
      setTasks(fetchedTasks)
    } catch (error) {
      console.error('Erro ao buscar as tarefas', error)
    }
    setIsLoading(false)
  }

  const addTask = async (description: string) => {
    try {
      const newTasks = await postNewTask(description)
      setTasks(newTasks)
    } catch (error) {
      console.error('Erro ao adicionar tarefa', error)
    } finally {
      setIsLoading(false)
    }
  }

  const editTask = useCallback(
    async (
      id: string,
      {
        checked,
        description,
        dueDate
      }: {
        checked?: boolean
        description?: string
        dueDate?: string
      }
    ) => {
      try {
        setIsLoading(true)
        const tasks = await patchTask(id, {
          checked,
          description,
          dueDate: dueDate || ''
        })
        setTasks(tasks as Models.TaskItem[])
      } catch (error) {
        console.error('Erro ao editar tarefa', error)
      } finally {
        setIsLoading(false)
      }
    },
    [patchTask]
  )

  const removeTask = useCallback(
    async (id: string) => {
      try {
        setIsLoading(true)
        const tasks = await deleteTask(id)
        setTasks(tasks as Models.TaskItem[])
      } catch (error) {
        console.error('Erro ao deletar tarefa', error)
      } finally {
        setIsLoading(false)
      }
    },
    [deleteTask]
  )

  const reorderTasks = (draggedId: string, targetId: string) => {
    setTasks((prevTasks) => {
      const draggedTaskIndex = prevTasks.findIndex(
        (task) => task.id === draggedId
      )
      const targetTaskIndex = prevTasks.findIndex(
        (task) => task.id === targetId
      )

      if (draggedTaskIndex === -1 || targetTaskIndex === -1) return prevTasks

      const updatedTasks = [...prevTasks]
      const [movedTask] = updatedTasks.splice(draggedTaskIndex, 1)
      updatedTasks.splice(targetTaskIndex, 0, movedTask)

      return updatedTasks
    })
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <TasksContext.Provider
      value={{
        tasks,
        editTask,
        addTask,
        fetchTasks,
        removeTask,
        reorderTasks,
        isLoading,
        setIsLoading
      }}
    >
      {children}
      <Loader isLoading={isLoading} />
    </TasksContext.Provider>
  )
}

export const useTasks = () => {
  const context = useContext(TasksContext)
  if (!context) {
    throw new Error('useTasks deve ser usado dentro de um TasksProvider')
  }
  return context
}

namespace Context {
  interface TasksContext {
    tasks: TaskItem[]
    editTask: (
      id: string,
      {
        checked: boolean,
        description: string
      }: { checked: boolean; description: string }
    ) => void
    addTask: (description: string) => void
    fetchTasks: () => void
    removeTask: (id: string) => void
    reorderTasks: (draggedTaskId: string, targetTaskId: string) => void
    isLoading: boolean
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  }
}

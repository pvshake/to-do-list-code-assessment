namespace Models {
  interface TaskItem {
    id: string
    description: string
    checked: boolean
    order: number
    dueDate: string
  }
}

import { render } from 'vitest-browser-react'
import { vi, test, expect } from 'vitest'
import TaskItem from './TaskItem'
import { TasksProvider } from '@/contexts/TasksContext'
import { userEvent } from '@vitest/browser/context'

const mockTask = {
  id: '1',
  description: 'Test Task',
  checked: false,
  dueDate: '01012023',
  order: 1
}

test('renders task item correctly', async () => {
  const { getByTestId } = render(
    <TasksProvider>
      <TaskItem taskItem={mockTask} />
    </TasksProvider>
  )

  const taskItem = getByTestId('task-item')
  await expect.element(taskItem).toBeInTheDocument()

  const taskDescription = getByTestId('task-description')
  await expect.element(taskDescription).toHaveTextContent('Test Task')

  const taskDueDate = getByTestId('task-due-date')
  await expect.element(taskDueDate).toHaveTextContent('01/01/2023')
})

test('toggles task completion', async () => {
  const { getByTestId } = render(
    <TasksProvider>
      <TaskItem taskItem={mockTask} />
    </TasksProvider>
  )

  const checkbox = getByTestId('task-checkbox')
  await expect.element(checkbox).not.toBeChecked()
  await userEvent.click(checkbox)
})

test('edits task description', async () => {
  const { getByTestId } = render(
    <TasksProvider>
      <TaskItem taskItem={mockTask} />
    </TasksProvider>
  )

  const editButton = getByTestId('task-edit-button')
  await expect.element(editButton).toBeInTheDocument()
  await userEvent.click(editButton)

  const editInput = getByTestId('task-edit-input')
  await expect.element(editInput).toBeInTheDocument()

  await userEvent.type(editInput, 'Updated Task')
  await userEvent.keyboard('{Enter}')
})

test('deletes task', async () => {
  const { getByTestId } = render(
    <TasksProvider>
      <TaskItem taskItem={mockTask} />
    </TasksProvider>
  )

  const deleteButton = getByTestId('task-delete-button')
  await expect.element(deleteButton).toBeInTheDocument()
  await userEvent.click(deleteButton)
})

test('edits task due date', async () => {
  const { getByTestId } = render(
    <TasksProvider>
      <TaskItem taskItem={mockTask} />
    </TasksProvider>
  )

  const editDueDateButton = getByTestId('task-edit-due-date-button')
  await expect.element(editDueDateButton).toBeInTheDocument()
  await userEvent.click(editDueDateButton)

  const dueDateInput = getByTestId('task-due-date-input')
  await expect.element(dueDateInput).toBeInTheDocument()

  await userEvent.type(dueDateInput, '31/12/2023')
  await userEvent.keyboard('{Enter}')
})

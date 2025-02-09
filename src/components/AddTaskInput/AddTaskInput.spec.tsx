import { expect, test, vi } from 'vitest'
import AddTaskInput from './AddTaskInput'
import { render } from 'vitest-browser-react'
import { userEvent } from '@vitest/browser/context'

test('Render AddTaskInput', async () => {
  const { getByTestId } = render(<AddTaskInput onAddTask={() => {}} />)
  const addTaskInput = getByTestId('add-task-input')
  await expect.element(addTaskInput).toBeInTheDocument()
})

test('Dont render Pressione Enter para salvar when screen is collapsed', async () => {
  const { getByPlaceholder } = render(<AddTaskInput onAddTask={() => {}} />)
  const addTaskInput = getByPlaceholder('+ Adicionar uma tarefa a lista.')
  await expect.element(addTaskInput).toBeInTheDocument()
})

test('Run onAddTaskFn', async () => {
  const onAddTask = vi.fn()
  const { getByTestId } = render(<AddTaskInput onAddTask={onAddTask} />)
  const addTaskInput = getByTestId('add-task-input')

  // Simular digitação
  await userEvent.type(addTaskInput, 'Descrição top...')

  // Simular pressionar Enter
  await userEvent.keyboard('{Enter}')

  // Verificar se a função foi chamada corretamente
  expect(onAddTask).toHaveBeenCalledTimes(1)
  expect(onAddTask).toHaveBeenCalledWith('Descrição top...')
})

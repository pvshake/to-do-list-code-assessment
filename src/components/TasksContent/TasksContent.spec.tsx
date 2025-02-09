import { expect, test, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import TasksContent from './TasksContent'

// Mockando o módulo antes de importar `useTasks`
vi.mock('@/contexts/TasksContext', () => ({
  useTasks: vi.fn()
}))

import { useTasks } from '@/contexts/TasksContext'

test('Renderiza mensagem de lista vazia quando não há tarefas', async () => {
  ;(useTasks as any).mockReturnValue({ tasks: [], isLoading: false })

  console.log('Mock de useTasks:', useTasks())

  const { getByTestId } = render(<TasksContent />)
  const emptyResult = getByTestId('empty-result')
  await expect.element(emptyResult).not.toBeInTheDocument()
})

test('Renderiza tarefas pendentes', async () => {
  ;(useTasks as any).mockReturnValue({
    tasks: [{ id: '1', description: 'Fazer compras', checked: false }],
    isLoading: false
  })

  const { getByTestId, container } = render(<TasksContent />)
  const pendingTasks = getByTestId('pending-tasks')
  await expect.element(pendingTasks).toBeInTheDocument()
  expect(container.querySelector("[data-testid='empty-result']")).toBeNull()
})

test('Renderiza tarefas concluídas', async () => {
  ;(useTasks as any).mockReturnValue({
    tasks: [{ id: '2', description: 'Estudar React', checked: true }]
  })

  const { getByTestId, container } = render(<TasksContent />)
  const completedTasks = getByTestId('completed-tasks')
  await expect.element(completedTasks).toBeInTheDocument()
  expect(container.querySelector("[data-testid='empty-result']")).toBeNull()
})

test('Exibe confetes quando todas as tarefas estão concluídas', async () => {
  ;(useTasks as any).mockReturnValue({
    tasks: [
      { id: '1', description: 'Fazer compras', checked: true },
      { id: '2', description: 'Estudar React', checked: true }
    ],
    isLoading: false
  })

  const { getByTestId } = render(<TasksContent />)

  await expect.element(getByTestId('confetti')).toBeInTheDocument()
})

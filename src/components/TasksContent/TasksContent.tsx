import React from 'react'
import { useTasks } from '@/contexts/TasksContext'
import { useWindowSize } from 'react-use'
import ReactConfetti from 'react-confetti'
import EmptyResult from '../EmptyResult/EmptyResult'
import TaskItem from '../TaskItem/TaskItem'

const TasksContent = () => {
  const { tasks } = useTasks()
  const { width, height } = useWindowSize()

  const pendingTasks = tasks.filter((task) => !task.checked)
  const completedTasks = tasks.filter((task) => task.checked)

  const allTasksCompleted = tasks.length > 0 && pendingTasks.length === 0

  if (pendingTasks.length === 0 && completedTasks.length === 0) {
    return (
      <EmptyResult
        data-testid="empty-result"
        message="Nada por aqui... Adicione uma nova tarefa!"
        emoji="📝"
        isFullScreen
      />
    )
  }

  return (
    <div
      className="flex flex-col self-stretch gap-7.5"
      data-testid="tasks-content"
    >
      {allTasksCompleted && (
        <ReactConfetti
          data-testid="confetti"
          gravity={0.9}
          width={width}
          height={height}
          initialVelocityX={4.5}
          initialVelocityY={4.5}
          numberOfPieces={300}
          recycle={false}
        />
      )}

      <div data-testid="pending-tasks">
        <h5 className="heading-secondary">Para fazer</h5>
        <ul className="flex flex-col self-stretch">
          {pendingTasks.length > 0 ? (
            pendingTasks.map((task) => (
              <TaskItem
                key={task.id}
                taskItem={task}
                data-testid="task-item-pending"
              />
            ))
          ) : (
            <EmptyResult
              data-testid="empty-pending"
              message="Nenhuma tarefa pendente"
              emoji="☕"
            />
          )}
        </ul>
      </div>
      <div data-testid="completed-tasks">
        <h5 className="heading-secondary">Concluído</h5>
        <ul className="flex flex-col self-stretch">
          {completedTasks.length > 0 ? (
            completedTasks.map((task) => (
              <TaskItem
                key={task.id}
                taskItem={task}
                data-testid="task-item-completed"
              />
            ))
          ) : (
            <EmptyResult
              data-testid="empty-completed"
              message="Nada concluído ainda"
              emoji="🚀"
            />
          )}
        </ul>
      </div>
    </div>
  )
}

export default TasksContent

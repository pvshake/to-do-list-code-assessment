import React from 'react'
import TaskItem from './TaskItem'
import EmptyResult from './EmptyResult'
import { useTasks } from '@/contexts/TasksContext'
import { useWindowSize } from 'react-use'
import ReactConfetti from 'react-confetti'

const TasksContent = () => {
  const { tasks } = useTasks()
  const { width, height } = useWindowSize()

  const pendingTasks = tasks.filter((task) => !task.checked)
  const completedTasks = tasks.filter((task) => task.checked)

  const allTasksCompleted = tasks.length > 0 && pendingTasks.length === 0

  if (pendingTasks.length === 0 && completedTasks.length === 0) {
    return (
      <EmptyResult
        message="Nada por aqui... Adicione uma nova tarefa!"
        emoji="📝"
        isFullScreen
      />
    )
  }

  return (
    <div className="flex flex-col self-stretch gap-7.5">
      {allTasksCompleted && (
        <ReactConfetti
          gravity={0.9}
          width={width}
          height={height}
          initialVelocityX={4.5}
          initialVelocityY={4.5}
          numberOfPieces={300}
          recycle={false}
        />
      )}

      <div>
        <h5 className="heading-secondary">Para fazer</h5>
        <ul className="flex flex-col self-stretch">
          {pendingTasks.length > 0 ? (
            pendingTasks.map((task) => (
              <TaskItem key={task.id} taskItem={task} />
            ))
          ) : (
            <EmptyResult message="Nenhuma tarefa pendente" emoji="☕" />
          )}
        </ul>
      </div>
      <div>
        <h5 className="heading-secondary">Concluído</h5>
        <ul className="flex flex-col self-stretch">
          {completedTasks.length > 0 ? (
            completedTasks.map((task) => (
              <TaskItem key={task.id} taskItem={task} />
            ))
          ) : (
            <EmptyResult message="Nada concluído ainda" emoji="🚀" />
          )}
        </ul>
      </div>
    </div>
  )
}

export default TasksContent

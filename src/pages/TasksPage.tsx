import CheckIcon from '@/assets/icons/CheckIcon'
import AddTaskInput from '@/components/AddTaskInput/AddTaskInput'
import TasksContent from '@/components/TasksContent/TasksContent'
import { useTasks } from '@/contexts/TasksContext'
import React from 'react'

const TasksPage = () => {
  const { addTask } = useTasks()
  return (
    <main className="h-screen w-screen flex-center">
      <article
        className="shadow-custom flex flex-col md:rounded-5 w-full h-full
          md:w-4/5 md:h-4/5 2xl:w-1/2"
      >
        <header className="bg-primary-400 flex self-stretch p-7.5 gap-3.75 border border-black md:rounded-t-5">
          <CheckIcon color="#578F5D" />{' '}
          <h2 className="heading-primary">TODO List</h2>
        </header>
        <section className="bg-white flex flex-1 flex-col gap-7.5 p-7.5 self-stretch md:rounded-b-5 overflow-y-auto">
          <div>
            <AddTaskInput onAddTask={addTask} />
          </div>
          <div>
            <TasksContent />
          </div>
        </section>
      </article>
    </main>
  )
}

export default TasksPage

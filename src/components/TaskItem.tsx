import React, { useState } from 'react'
import BoxCheckedIcon from '@/assets/icons/BoxCheckedIcon'
import { useTasks } from '@/contexts/TasksContext'
import { CornerDownRight, Pencil, Trash2 } from 'lucide-react'

interface TaskItemProps {
  taskItem: Models.TaskItem
}

const TaskItem = ({ taskItem }: TaskItemProps) => {
  const { editTask, removeTask, reorderTasks } = useTasks()
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [newDescription, setNewDescription] = useState<string>(
    taskItem.description
  )

  const handleDragStart = (event: React.DragEvent<HTMLLIElement>) => {
    setIsDragging(false)
    event.dataTransfer.setData('taskId', taskItem.id)
  }

  const handleDrop = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault()
    const draggedTaskId = event.dataTransfer.getData('taskId')

    if (draggedTaskId !== taskItem.id) {
      reorderTasks(draggedTaskId, taskItem.id)
    }
    setIsDragging(false)
  }

  const handleCheckedTask = (checked: boolean) => {
    editTask(taskItem.id, { checked } as any)
  }

  const handleDescriptionChange = (description: string) => {
    editTask(taskItem.id, { description: newDescription } as any)
  }

  const handleDeleteTask = () => {
    removeTask(taskItem.id)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && newDescription.trim() !== '') {
      handleDescriptionChange(newDescription.trim())
      setIsEditing(false)
    }
  }

  return (
    <li
      className={`relative list-none flex-start flex-1 gap-3.75 py-3.75 border-b border-primary-300 ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      draggable
      onDragStart={handleDragStart}
      onDragOver={(e) => {
        e.preventDefault()
        setIsDragging(true)
      }}
      onDrop={handleDrop}
      onDragEnd={() => setIsDragging(false)}
    >
      <div className="relative w-7.5 h-7.5">
        <input
          className="absolute appearance-none peer w-7.5 h-7.5 shrink-0 border-2 border-primary-600 rounded-2.5 flex-center transition-colors checked:bg-primary-600 checked:border-primary-600 cursor-pointer"
          type="checkbox"
          checked={taskItem.checked}
          onChange={(e) => handleCheckedTask(e.target.checked)}
        />
        <div className="absolute inset-0 flex flex-center pointer-events-none">
          {taskItem.checked && <BoxCheckedIcon />}
        </div>
      </div>
      {isEditing ? (
        <input
          className="w-full border-none outline-none text-primary-700"
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          onBlur={() => {
            setIsEditing(false)
            handleDescriptionChange(newDescription)
          }}
          autoFocus
          onKeyDown={handleKeyDown}
        />
      ) : (
        <p
          className={`cursor-text
            ${taskItem.checked ? 'text-item-checked' : 'text-item-unchecked'}
          `}
          onClick={() => setIsEditing(true)}
        >
          {taskItem.description}
        </p>
      )}
      <div className="absolute right-0 flex-center gap-2.5">
        {!isEditing && (
          <Pencil
            className="w-5 h-5 text-primary-600 cursor-pointer transition-transform hover:scale-110"
            onClick={() => setIsEditing(true)}
          />
        )}
        {isEditing && (
          <CornerDownRight
            className="w-5 h-5 text-primary-600 cursor-pointer transition-transform hover:scale-110"
            onClick={() => setIsEditing(false)}
          />
        )}
        <Trash2
          className="w-5 h-5 text-red-500 cursor-pointer transition-transform hover:scale-110"
          onClick={handleDeleteTask}
        />
      </div>
    </li>
  )
}

export default TaskItem

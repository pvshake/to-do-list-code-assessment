import React, { useState } from 'react'
import BoxCheckedIcon from '@/assets/icons/BoxCheckedIcon'
import { useTasks } from '@/contexts/TasksContext'
import { CalendarX, CornerDownRight, Pencil, Trash2 } from 'lucide-react'
import { withMask } from 'use-mask-input'
import { unformat } from '@/utils/formatter'

interface TaskItemProps {
  taskItem: Models.TaskItem
}

const TaskItem = ({ taskItem }: TaskItemProps) => {
  const { editTask, removeTask, reorderTasks } = useTasks()
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isEditingDueDate, setIsEditingDueDate] = useState<boolean>(false)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [newDescription, setNewDescription] = useState<string>(
    taskItem.description
  )
  const [dueDate, setDueDate] = useState<string | undefined>(taskItem.dueDate)

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

  const handleDescriptionChange = () => {
    editTask(taskItem.id, { description: newDescription } as any)
  }

  const handleDueDateChange = (dueDate: string) => {
    editTask(taskItem.id, {
      dueDate: unformat(dueDate)
    } as any)
  }

  const handleDeleteTask = () => {
    removeTask(taskItem.id)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && newDescription.trim() !== '') {
      handleDescriptionChange()
      setIsEditing(false)
    }
  }

  return (
    <li
      data-testid="task-item"
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
          data-testid="task-checkbox"
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
          data-testid="task-edit-input"
          className="w-full border-none outline-none text-primary-700"
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          onBlur={() => {
            setIsEditing(false)
            handleDescriptionChange()
          }}
          autoFocus
          onKeyDown={handleKeyDown}
        />
      ) : (
        <div className="flex flex-col">
          <p
            data-testid="task-description"
            className={`cursor-text ${
              taskItem.checked ? 'text-item-checked' : 'text-item-unchecked'
            }`}
            onClick={() => setIsEditing(true)}
          >
            {taskItem.description}
          </p>
          <p data-testid="task-due-date" className="due-date-text">
            {taskItem.dueDate && taskItem.dueDate.length === 8
              ? taskItem.dueDate.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')
              : ''}
          </p>
        </div>
      )}
      <div className="absolute right-0 flex-center gap-2.5">
        {isEditingDueDate ? (
          <>
            <input
              data-testid="task-due-date-input"
              className="due-date-input relative"
              type="text"
              placeholder="Data de vencimento"
              ref={withMask('99/99/9999')}
              value={dueDate}
              onChange={(e) => {
                if (e.target.value.length <= 10) setDueDate(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleDueDateChange(dueDate!)
                  setIsEditingDueDate(false)
                }
              }}
              onBlur={() => {
                setIsEditingDueDate(false)
                handleDueDateChange(dueDate!)
              }}
              autoFocus
            />
            <CornerDownRight className="w-5 h-5 text-primary-600 absolute right-16" />
          </>
        ) : (
          <CalendarX
            data-testid="task-edit-due-date-button"
            className="w-5 h-5 text-primary-600 cursor-pointer transition-transform hover:scale-110"
            onClick={() => setIsEditingDueDate(true)}
          />
        )}
        {!isEditing && (
          <Pencil
            data-testid="task-edit-button"
            className="w-5 h-5 text-primary-600 cursor-pointer transition-transform hover:scale-110"
            onClick={() => setIsEditing(true)}
          />
        )}
        {isEditing && (
          <CornerDownRight
            data-testid="task-save-edit-button"
            className="w-5 h-5 text-primary-600 cursor-pointer transition-transform hover:scale-110"
            onClick={() => setIsEditing(false)}
          />
        )}
        <Trash2
          data-testid="task-delete-button"
          className="w-5 h-5 text-red-500 cursor-pointer transition-transform hover:scale-110"
          onClick={handleDeleteTask}
        />
      </div>
    </li>
  )
}

export default TaskItem

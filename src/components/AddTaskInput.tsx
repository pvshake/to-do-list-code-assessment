import { useTasks } from '@/contexts/TasksContext'
import React, { useMemo, useState } from 'react'
import { useWindowSize } from 'react-use'

const AddTaskInput = () => {
  const { addTask } = useTasks()
  const { width } = useWindowSize()
  const collapsed = useMemo(() => width < 768, [width])
  const [inputValue, setInputValue] = useState<string>('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      addTask(inputValue)
      setInputValue('')
    }
  }

  return (
    <input
      className="add-task-input"
      type="text"
      placeholder={`+ Adicionar uma tarefa a lista. ${
        collapsed ? '' : 'Pressione Enter para salvar.'
      }`}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  )
}

export default AddTaskInput

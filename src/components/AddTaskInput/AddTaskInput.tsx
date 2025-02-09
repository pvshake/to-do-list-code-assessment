import React, { useMemo, useState } from 'react'
import { useWindowSize } from 'react-use'

interface AddTaskInputProps {
  onAddTask: (description: string) => void
}

const AddTaskInput = ({ onAddTask }: AddTaskInputProps) => {
  const { width } = useWindowSize()
  const collapsed = useMemo(() => width < 768, [width])
  const [inputValue, setInputValue] = useState<string>('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      onAddTask(inputValue)
      setInputValue('')
    }
  }

  return (
    <input
      data-testid="add-task-input"
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

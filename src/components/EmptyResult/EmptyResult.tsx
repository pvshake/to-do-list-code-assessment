import React from 'react'

interface EmptyResultProps {
  emoji: string
  message: string
  isFullScreen?: boolean
}

const EmptyResult = ({
  message,
  emoji,
  isFullScreen = false
}: EmptyResultProps) => {
  return (
    <div
      data-testid="empty-result-content"
      className={`flex-center max-sm:flex-col gap-2.5 text-center ${
        isFullScreen ? 'h-80' : 'p-6'
      }`}
    >
      <div data-testid="emoji-prop" className="text-4xl">
        {emoji}
      </div>
      <p data-testid="message-prop" className="heading-tertiary">
        {message}
      </p>
    </div>
  )
}

export default EmptyResult

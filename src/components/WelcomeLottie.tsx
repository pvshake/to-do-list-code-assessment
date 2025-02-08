import React from 'react'
import todo from '@/assets/lotties/todo.json'
import Lottie from 'react-lottie'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: todo,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const WelcomeLottie = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <Lottie
        options={defaultOptions}
        height={320}
        width={320}
        speed={0.8}
        isClickToPauseDisabled
        style={{ pointerEvents: 'none' }}
      />
    </div>
  )
}

export default WelcomeLottie

import WelcomeLottie from '@/components/WelcomeLottie'
import { CornerDownRight } from 'lucide-react'
import React from 'react'

interface RootPageProps {
  onNavigate: () => void | Promise<void>
}

const RootPage = ({ onNavigate }: RootPageProps) => {
  return (
    <main className="h-screen w-screen flex-start mt-15 max-sm:mt-2.5 flex-col gap-3.75 p-7.5">
      <WelcomeLottie />
      <h1 className="text-3xl font-bold text-center text-primary-700 leading-9">
        👋🏼 Hello, Welcome to the best To-Do List ever!
      </h1>
      <button
        className="button-shine relative flex-start gap-1.5 text-primary-50 font-medium bg-primary-700 rounded-2.5 p-2.5 mt-4 transition-all duration-300 ease-in-out hover:scale-105 shadow-lg"
        onClick={onNavigate}
      >
        <CornerDownRight className="w-5 h-5" />
        <p>Try it!</p>
      </button>
    </main>
  )
}

export default RootPage

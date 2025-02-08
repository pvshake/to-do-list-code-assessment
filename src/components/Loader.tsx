import React from 'react'

interface LoaderProps {
  isLoading: boolean
}

const Loader = ({ isLoading }: LoaderProps) => {
  return (
    isLoading && (
      <div className="z-50 absolute top-0 left-0 w-full h-full bg-black/20 bg-opacity-50 flex justify-center items-center">
        <div className="loader"></div>
      </div>
    )
  )
}

export default Loader

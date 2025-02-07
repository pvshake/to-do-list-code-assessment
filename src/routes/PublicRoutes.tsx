import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'

const RootPage = lazy(() => import('@/pages/RootPage'))
const TasksPage = lazy(() => import('@/pages/TasksPage'))

const PublicRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="tasks" element={<TasksPage />} />
      </Routes>
    </Suspense>
  )
}

export default PublicRoutes

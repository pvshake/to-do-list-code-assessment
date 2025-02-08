import Loader from '@/components/Loader'
import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { useNavigate } from 'react-router'

const RootPage = lazy(() => import('@/pages/RootPage'))
const TasksPage = lazy(() => import('@/pages/TasksPage'))

const PublicRoutes = () => {
  const navigate = useNavigate()
  const handleNavigate = (route: string) => navigate(route)

  return (
    <Suspense fallback={<Loader isLoading />}>
      <Routes>
        <Route
          path="/"
          element={<RootPage onNavigate={() => handleNavigate('/tasks')} />}
        />
        <Route path="tasks" element={<TasksPage />} />
      </Routes>
    </Suspense>
  )
}

export default PublicRoutes

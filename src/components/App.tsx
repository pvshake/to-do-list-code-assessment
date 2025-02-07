import PublicRoutes from '@/routes/publicRoutes'
import { BrowserRouter } from 'react-router'

const App = () => {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  )
}

export default App

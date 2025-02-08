import PublicRoutes from '@/routes/PublicRoutes'
import { BrowserRouter } from 'react-router'

const App = () => {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  )
}

export default App

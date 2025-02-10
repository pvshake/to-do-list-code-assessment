import PublicRoutes from '@/routes/PublicRoutes'
import { BrowserRouter } from 'react-router'

const App = () => {
  return (
    <BrowserRouter basename="/">
      <div data-testid="app-container">
        <PublicRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App

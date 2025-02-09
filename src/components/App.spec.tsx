import { test, expect } from 'vitest'
import { render } from 'vitest-browser-react'
import App from './App'

test('Renderiza App corretamente', async () => {
  const { getByTestId } = render(<App />)

  // Verifica se o PublicRoutes foi renderizado corretamente
  const appContainer = getByTestId('app-container')
  await expect.element(appContainer).toBeInTheDocument()
})

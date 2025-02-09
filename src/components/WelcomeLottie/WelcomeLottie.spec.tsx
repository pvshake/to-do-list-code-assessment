import '@vitest/browser/matchers.d.ts'
import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import WelcomeLottie from './WelcomeLottie'

test('renders WelcomeLottie component', async () => {
  const { getByTestId } = render(<WelcomeLottie />)

  // Verifica se o container do Lottie está presente
  const lottieContainer = getByTestId('welcome-lottie-container')
  await expect.element(lottieContainer).toBeInTheDocument()

  // Verifica se o Lottie está presente no container in more than 1 second
  const lottie = getByTestId('welcome-lottie')
  await expect.element(lottie).toBeInTheDocument()
})

import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import Loader from './Loader'

test('Renders Loader component when isLoading is activated', async () => {
  const { getByTestId } = render(<Loader isLoading={true} />)
  const loaderContainer = getByTestId('loader-container')
  await expect.element(loaderContainer).toBeInTheDocument()
})

test('Dont render Loader component when isLoading is deactivated', async () => {
  const { getByTestId } = render(<Loader isLoading={false} />)
  const loaderContainer = getByTestId('loader-container')
  await expect.element(loaderContainer).not.toBeInTheDocument()
})

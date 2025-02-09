import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import EmptyResult from './EmptyResult'
import { a } from 'vitest/dist/chunks/suite.B2jumIFP.js'

test('Show EmptyResult component', async () => {
  const { getByTestId } = render(
    <EmptyResult emoji="🤔" message="No results found" />
  )
  const emptyResultContent = getByTestId('empty-result-content')
  await expect.element(emptyResultContent).toBeInTheDocument()
})

test('Show emoji prop', async () => {
  const { getByTestId } = render(
    <EmptyResult emoji="🤔" message="No results found" />
  )
  const emojiProp = getByTestId('emoji-prop')
  await expect.element(emojiProp).toHaveTextContent('🤔')
})

test('Show message prop', async () => {
  const { getByTestId } = render(
    <EmptyResult emoji="🤔" message="No results found" />
  )
  const messageProp = getByTestId('message-prop')
  await expect.element(messageProp).toHaveTextContent('No results found')
})

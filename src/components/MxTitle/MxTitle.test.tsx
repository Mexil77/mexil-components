import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { MxTitle } from '.'

describe('MxTitle test:', () => {
  afterEach(cleanup)

  it('should render component', () => {
    render(<MxTitle title='Testing' />)
  })

  it('should render title', () => {
    render(<MxTitle title='Testing' />)
    screen.getByText('Testing')
  })
})

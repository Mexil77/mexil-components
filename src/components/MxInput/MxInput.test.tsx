import { cleanup, render } from '@testing-library/react'
import { MxInput } from '.'

describe('Mxinput test:', () => {
  afterEach(cleanup)

  it('shoult render component', () => {
    render(<MxInput />)
  })
})

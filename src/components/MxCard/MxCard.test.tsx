import { cleanup, render } from '@testing-library/react'
import { MxCard } from '.'
import { MxCardHeader } from './MxCardHeader'

describe('Mxcard test:', () => {
  afterEach(cleanup)

  it('shoult render empty component', () => {
    render(<MxCard />)
  })

  it('shoult render component whit header', () => {
    render(<MxCard header={<MxCardHeader />} />)
  })

  it('shoult render component loadeing', () => {
    render(<MxCard loading />)
  })
})

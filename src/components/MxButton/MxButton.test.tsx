import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { MxButton } from '.'

describe('MxButton test:', () => {
  afterEach(cleanup)

  it('should render component', () => {
    render(<MxButton label='Testing' />)
  })

  it('should render label', () => {
    render(<MxButton label='Testing' />)
    screen.getByText('Testing')
  })

  it('should be disabled', () => {
    render(
      <MxButton
        label='Testing'
        disabled
      />
    )
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('onClick triggers properly', async () => {
    const mockFn = vi.fn()
    render(
      <MxButton
        onClick={mockFn}
        label='Testing'
      />
    )
    expect(mockFn).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByRole('button'))
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('disabled prevents action', async () => {
    const mockFn = vi.fn()
    render(
      <MxButton
        onClick={mockFn}
        label='Testing'
        disabled
      />
    )
    expect(mockFn).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByRole('button'))
    expect(mockFn).toHaveBeenCalledTimes(0)
  })
})

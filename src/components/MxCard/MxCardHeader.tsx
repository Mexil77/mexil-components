import { ReactNode } from 'react'

export type MxCardHeaderProps = {
  children?: ReactNode
}

export const MxCardHeader = ({ children }: MxCardHeaderProps) => {
  return children
}

MxCardHeader.displayName = 'MxCardHeader'

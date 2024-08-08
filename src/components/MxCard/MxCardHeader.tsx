export type MxCardHeaderProps = {
  label: string
}

export const MxCardHeader = ({ label }: MxCardHeaderProps) => {
  return <h1>{label}</h1>
}

MxCardHeader.displayName = 'MxCardHeader'

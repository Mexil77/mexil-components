import clsx from 'clsx'
import { ReactNode } from 'react'
import { Sizes } from '../../enums'
import styles from './styles.module.scss'

type MxCardProps = {
  loading?: boolean
  padding?: boolean
  children?: ReactNode
  header?: ReactNode
  size?: `${Sizes}`
  loadLines?: number
}

export function MxCard({
  loading = false,
  padding = true,
  children,
  header,
  size = 'medium',
  loadLines = 3,
}: MxCardProps) {
  const styleCard = clsx(styles.mxcard, {
    [styles[`mxcard--${size}`]]: size,
  })
  const styleHeader = clsx(styles.mxcard_header, {
    [styles[`mxcard_header--padding`]]: padding,
  })
  const styleBody = clsx(styles.mxcard_body, {
    [styles[`mxcard_body--padding`]]: padding,
  })
  const styleLoaderContainer = clsx(styles.loader_container, {
    // [styles[`loader_container--${size}`]]: size,
  })
  const styleLoaderLine = clsx(styles.loader_line, {
    [styles[`loader_line--${size}`]]: size,
  })

  const biuldLoaderContainer = (): ReactNode => {
    const nodeLoadLines: ReactNode[] = []
    for (let index = 0; index < loadLines; index++) {
      nodeLoadLines.push(<div className={styleLoaderLine}></div>)
    }
    return <div className={styleLoaderContainer}>{nodeLoadLines}</div>
  }

  return (
    <div className={styleCard}>
      {loading ? (
        biuldLoaderContainer()
      ) : (
        <>
          {header && <div className={styleHeader}>{header}</div>}
          <div className={styleBody}>{children}</div>
        </>
      )}
    </div>
  )
}

export { MxCardHeader } from './MxCardHeader'

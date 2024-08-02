import { Sizes, Variants } from '../../enums'
import styles from './styles.module.scss'
import clsx from 'clsx'

interface ComponentProps extends React.ComponentProps<'button'> {
  disable?: boolean
  size?: `${Sizes}`
  label: string
  variant?: `${Variants}`
}

export function MxButton({
  disable = false,
  size = 'medium',
  label,
  variant = 'primary',
  ...props
}: ComponentProps) {
  const style = clsx(styles.mxbutton, {
    [styles['mxbutton--disable']]: disable,
    [styles[`mxbutton--${size}`]]: size,
    [styles[`mxbutton--${variant}`]]: variant,
  })

  return (
    <button
      type='button'
      className={style}
      {...props}
    >
      {label}
    </button>
  )
}

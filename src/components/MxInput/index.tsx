import clsx from 'clsx'
import styles from './styles.module.scss'
import React from 'react'
import { InputTypes, States } from '../../enums'

interface ComponentProps extends React.ComponentProps<'input'> {
  disabled?: boolean
  placeholder?: string
  type?: `${InputTypes}`
  state?: `${States}`
}

export function MxInput({
  disabled = false,
  placeholder = 'MxInput',
  type = 'text',
  state = 'normal',
}: ComponentProps) {
  const style = clsx(styles.mxinput, {
    [styles[`mxinput--${state}`]]: state,
  })

  return (
    <input
      className={style}
      disabled={disabled}
      placeholder={placeholder}
      type={type}
    ></input>
  )
}

import React from 'react'
import cls from './Button.module.css'

export default function Button({children, ...props}) {
  return (
    <button {...props} className={cls.customBtn}>
        {children}
    </button >
  )
}

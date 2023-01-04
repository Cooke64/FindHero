import React from 'react'
import cls from './Input.module.css'

export default function Input(props) {
  return (
    <input {...props} className={cls.Input}/>

  )
}

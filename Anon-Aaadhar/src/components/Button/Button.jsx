import React from 'react'
import './Button.css'

function Button({text , colour , fontSize}) {
  return (
    <>
      <button className={colour}>
            {text}
      </button>
    </>
  )
}

export default Button

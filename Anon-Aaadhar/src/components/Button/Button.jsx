import React from 'react'
import './Button.css'

function Button({text , colour , WIDTH}) {
  return (
    <>
      <button className={colour} >
            {text}
      </button>
    </>
  )
}

export default Button

import React from 'react'

const InputBox = ({placeholder, ...otherProps}) => {
  return (
    <>
      <input placeholder={placeholder} {...otherProps} />
    </>
  )
}

export default InputBox

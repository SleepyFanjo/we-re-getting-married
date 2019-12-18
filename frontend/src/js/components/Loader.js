import React from 'react'

export const SimpleLoader = ({ className, ...rest }) => (
  <div className={`Loader ${className ? className : ''}`} {...rest}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export const StyledLoader = ({ className, ...rest }) => (
  <div className={`StyledLoader ${className ? className : ''}`} {...rest}></div>
)

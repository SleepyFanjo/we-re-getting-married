import React from 'react'

const Loader = ({ className, ...rest }) => (
  <div className={`Loader ${className ? className : ''}`} {...rest}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default Loader

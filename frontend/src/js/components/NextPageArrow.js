import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../../assets/arrow.svg'

const NextPageArrow = ({ target, label }) => {
  return (
    <Link to={target} className="NextPageArrow__link">
      <span>{label}</span>
      <img src={arrow} alt="Arrow Icon" />
    </Link>
  )
}

export default NextPageArrow

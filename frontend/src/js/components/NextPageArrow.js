import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../../assets/arrow.svg'

const NextPageArrow = ({ target, label, onClick }) => {
  return (
    <Link to={target} onClick={onClick} className="NextPageArrow__link">
      <span>{label}</span>
      <img src={arrow} alt="Arrow Icon" />
    </Link>
  )
}

export default NextPageArrow

import React from 'react'
import logoNoBorder from '../../assets/logo-no-border.png'

const Checkmark = () => (
  <div className="Registered--checkmarkContainer">
    <svg
      class="Registered--checkmark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <circle
        class="Registered--checkmarkCircle"
        cx="26"
        cy="26"
        r="25"
        fill="none"
      />
    </svg>
    <img alt="Logo" src={logoNoBorder} className="Registered--names" />
  </div>
)

const Registered = () => {
  return (
    <div className="Registered">
      <p className="Registered--popupText">Merci !</p>
      <Checkmark />
      <p className="Registered--popupText">
        On te tient au courant très vite par e-mail.
      </p>
    </div>
  )
}

export default Registered

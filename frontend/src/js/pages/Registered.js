import React from 'react'

const Checkmark = () => (
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
    <path
      class="Registered--checkmarkCheck"
      fill="none"
      d="M14.1 27.2l7.1 7.2 16.7-16.8"
    />
  </svg>
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

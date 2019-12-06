import React, { useState, useEffect, useCallback } from 'react'
import Loader from './Loader'

const EmailRegister = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const onEmailChange = useCallback(e => setEmail(e.target.value), [])

  return (
    <form
      className="Register--input-container"
      onSubmit={e => {
        e.preventDefault()
        setLoading(true)
      }}
    >
      <input
        className="Register--input"
        name="email"
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="exemple@domaine.com"
      />
      {loading ? (
        <Loader className="Register--loader" aria-label="Loading" />
      ) : (
        <button type="submit" className="Register--submit" aria-label="Valider">
          <i class="material-icons">flight_takeoff</i>
        </button>
      )}
    </form>
  )
}

export default EmailRegister

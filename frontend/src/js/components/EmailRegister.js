import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import Loader from './Loader'

const postCredentials = (email, name) => {
  return fetch('/users/temporary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email
    })
  }).then(response => response.json())
}

const EmailRegister = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onEmailChange = useCallback(e => setEmail(e.target.value), [])
  const onNameChange = useCallback(e => setName(e.target.value), [])

  const submitInfos = (email, name) => {
    if (!email || !name) {
      setError(
        'Nous avons besoin de ton nom et de ton email pour planifier notre soirée'
      )
      return
    }
    setLoading(true)
    setError('')
    postCredentials(email, name).then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        history.push('/registered')
      }
      setLoading(false)
    })
  }

  return (
    <form
      className="Register--input-container"
      onSubmit={e => {
        e.preventDefault()
        submitInfos(email, name)
      }}
    >
      <input
        className="Register--input"
        name="name"
        type="text"
        value={name}
        onChange={onNameChange}
        placeholder="Ton nom"
      />
      <input
        className="Register--input"
        name="email"
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="exemple@domaine.com"
      />
      {error && <div className="Register--error">{error}</div>}
      {loading ? (
        <Loader className="Register--loader" aria-label="Loading" />
      ) : (
        <button
          type="submit"
          className="Button Register--submit"
          aria-label="Valider"
        >
          Je viens !
        </button>
      )}
    </form>
  )
}

export default EmailRegister

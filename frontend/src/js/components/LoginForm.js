import React, { useState, useContext, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { SimpleLoader as Loader } from './Loader'
import JwtContext from '../JwtContext'

const postCredentials = (email, password) => {
  return fetch('/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then(response => response.json())
}

const LoginForm = () => {
  const history = useHistory()
  const { setJsonWebToken, setUser } = useContext(JwtContext)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onPasswordChange = useCallback(e => setPassword(e.target.value), [])
  const onEmailChange = useCallback(e => setEmail(e.target.value), [])

  const submitInfos = (email, password) => {
    setLoading(true)
    setError('')
    postCredentials(email, password).then(data => {
      if (data.error) {
        setError(data.error)
        setLoading(false)
      } else {
        setJsonWebToken(data.token)
        setUser(data.user)
        localStorage.setItem('jwtToken', data.token)
        history.push('/')
      }
    })
  }

  return (
    <div className="Login--container">
      <form
        className="Login--input-container"
        onSubmit={e => {
          e.preventDefault()
          submitInfos(email, password)
        }}
      >
        <input
          className="Login--input"
          name="email"
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="exemple@domain.com"
        />
        <input
          className="Login--input"
          name="password"
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Mot de passe"
        />
        {error && <div className="Login--error">{error}</div>}
        {loading ? (
          <Loader className="Login--loader" aria-label="Loading" />
        ) : (
          <button
            type="submit"
            className="Button Login--submit"
            aria-label="Valider"
          >
            Se connecter
          </button>
        )}
      </form>
    </div>
  )
}

export default LoginForm

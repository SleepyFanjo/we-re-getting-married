import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import JwtContext from '../JwtContext'

// Return [ User, Loading, Error ]
const useCurrentUser = () => {
  const { jsonWebToken, user, setUser } = useContext(JwtContext)
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const updateUser = updatedUser => {
    setUser(updatedUser)
    fetch('/users/me/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jsonWebToken,
        user: updatedUser
      })
    })
  }

  useEffect(() => {
    if (user) {
      return
    }

    setLoading(true)
    fetch('/users/me?jsonWebToken=' + jsonWebToken)
      .then(response => {
        if (response && !response.redirected) {
          return response.json()
        }

        if (response.redirected) {
          history.push(response.url)
          return null
        }
      })
      .then(data => {
        if (data && data.user) {
          setUser(data.user)
          setLoading(false)
        } else if (data.redirected) {
          window.location.href = data.url
        }
      })
      .catch()
  }, [jsonWebToken, user, setUser, history])

  return [user, loading, updateUser]
}

export default useCurrentUser

import { useState, useEffect, useContext } from 'react'
import JwtContext from '../JwtContext'

// Return [ User, Loading, Error ]
const useCurrentUser = () => {
  const { jsonWebToken, user, setUser } = useContext(JwtContext)
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
      .then(response => response.json())
      .then(data => {
        if (data && data.user) {
          setUser(data.user)
          setLoading(false)
        }
      })
  }, [jsonWebToken, user, setUser])

  return [user, loading, updateUser]
}

export default useCurrentUser

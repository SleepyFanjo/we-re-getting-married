import { useState, useEffect, useContext } from 'react'
import JwtContext from '../JwtContext'

// Return [ User, Loading, Error ]
const useCurrentUser = () => {
  const { jsonWebToken, user, setUser } = useContext(JwtContext)
  const [loading, setLoading] = useState(false)

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

  return [user, loading]
}

export default useCurrentUser

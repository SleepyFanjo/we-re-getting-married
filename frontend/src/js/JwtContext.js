import React, { useState, useEffect } from 'react'

const JwtContext = React.createContext(null)

export const JwtProvider = ({ children }) => {
  const [jwtToken, setJwtToken] = useState(null)

  useEffect(() => {
    const jwt = localStorage.getItem('jwtToken')
    if (jwt) {
      setJwtToken(jwt)
    }
  }, [])

  return (
    <JwtContext.Provider
      value={{
        jwtToken,
        setJwtToken
      }}
    >
      {children}
    </JwtContext.Provider>
  )
}

export default JwtContext

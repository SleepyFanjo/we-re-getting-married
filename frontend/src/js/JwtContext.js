import React, { useState } from 'react'

const JwtContext = React.createContext(null)

export const JwtProvider = ({ children }) => {
  const [jsonWebToken, setToken] = useState(localStorage.getItem('jwtToken'))
  const [user, setUser] = useState(null)

  const setJsonWebToken = token => {
    setToken(token)
    setUser(null)
  }

  return (
    <JwtContext.Provider
      value={{
        jsonWebToken,
        setJsonWebToken,
        user,
        setUser
      }}
    >
      {children}
    </JwtContext.Provider>
  )
}

export default JwtContext

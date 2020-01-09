import React, { useState } from 'react'

const JwtContext = React.createContext(null)

export const JwtProvider = ({ children }) => {
  const [jwtToken, setJwtToken] = useState(localStorage.getItem('jwtToken'))

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

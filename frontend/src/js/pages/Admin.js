import React, { useState, useCallback } from 'react'
import Layout from '../components/Layout'
import 'sass/admin.scss'

const PasswordInput = ({ password, setPassword, triggerSearch }) => {
  const handleChange = ev => setPassword(ev.target.value)
  const handleKeyUp = ev => ev.keyCode === 13 && triggerSearch()

  return (
    <div className="Admin__password">
      <input
        type="password"
        value={password}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  )
}

const UsersDisplay = ({ users }) => {
  if (!users) {
    return null
  }

  return (
    <div className="Admin__usersContainer">
      {users.map(user => {
        return (
          <div className="Admin__user">
            <div className="Admin__userLine">
              <div className="Admin__userData">{user.email}</div>
            </div>
            <div className="Admin__userLine">
              <div className="Admin__userData">A répondu</div>
              <div className="Admin__userData">
                {user.hasUpdatedInfos ? 'Oui' : 'Non'}
              </div>
            </div>
            <div className="Admin__userLine">
              <div className="Admin__userData">Bus ?</div>
              <div className="Admin__userData">
                {user.needBus ? 'Oui' : 'Non'}
              </div>
            </div>
            <div className="Admin__userLine">
              <div className="Admin__userData">{user.mealPref}</div>
            </div>
            {user.peoples &&
              user.peoples.map(people => (
                <div className="Admin__userLine">
                  <div className="Admin__userData">{people.name}</div>
                  <div className="Admin__userData">{people.attending}</div>
                </div>
              ))}
          </div>
        )
      })}
    </div>
  )
}

const Admin = () => {
  const [users, setUsers] = useState(null)
  const [password, setPassword] = useState('')

  const triggerSearch = useCallback(() => {
    setPassword('')
    fetch('/users/all/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        superSecret: password
      })
    })
      .then(response => response.json())
      .then(data => {
        setUsers(data)
      })
  }, [password])

  return (
    <Layout noFooter>
      {users ? (
        <UsersDisplay users={users} />
      ) : (
        <PasswordInput
          password={password}
          setPassword={setPassword}
          triggerSearch={triggerSearch}
        />
      )}
    </Layout>
  )
}

export default Admin

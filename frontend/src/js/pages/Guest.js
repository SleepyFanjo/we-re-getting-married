import React from 'react'
import Layout from '../components/Layout'
import { SimpleLoader } from '../components/Loader'
import useCurrentUser from '../hooks/useCurrentUser'

const PeopleAttending = ({ people, index, updatePeople }) => {
  const checkInput = e => {
    const { value } = e.target

    updatePeople({ ...people, attending: value }, index)
  }

  return (
    <div className="Guest__peopleContainer">
      <div>{people.name}</div>
      <div className="Guest__peopleSelector">
        <div className="Guest__peopleInput">
          <input
            type="radio"
            id={people.name + '-oui'}
            value="oui"
            checked={people.attending === 'oui'}
            name={people.name + '_attending'}
            onChange={checkInput}
          />
          <label htmlFor={people.name + '-oui'}>Vient</label>
        </div>
        <div className="Guest__peopleInput">
          <input
            type="radio"
            id={people.name + '-non'}
            value="non"
            checked={people.attending === 'non'}
            name={people.name + '_attending'}
            onChange={checkInput}
          />
          <label htmlFor={people.name + '-non'}>Ne vient pas</label>
        </div>
      </div>
    </div>
  )
}

const Guest = () => {
  const [user, loading, updateUser] = useCurrentUser()
  const updatePeople = (updatedPeople, i) => {
    updateUser({
      ...user,
      peoples: user.peoples.map((people, index) =>
        index === i ? updatedPeople : people
      )
    })
  }

  return (
    <Layout>
      <div className="Guest__intro">
        <div className="Guest__intro--heading">
          Ici tu peux confirmer ou non la présence de chacun
        </div>
        <div className="Guest__intro--content">
          Si tu ne sais pas encore pour tout le monde tu pourra revenir plus
          tard pour compléter. <br />
          Si nous avons oublié quelqu’un n’hésites pas à nous appeler ou faire
          un email.
        </div>
      </div>
      {loading ? (
        <div className="HomeEmpty">
          <SimpleLoader />
        </div>
      ) : (
        <div className="Guest__container">
          {user &&
            user.peoples.map((people, index) => (
              <PeopleAttending
                people={people}
                key={people._id}
                index={index}
                updatePeople={updatePeople}
              />
            ))}
        </div>
      )}
    </Layout>
  )
}

export default Guest

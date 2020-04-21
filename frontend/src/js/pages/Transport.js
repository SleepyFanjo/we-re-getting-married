import React from 'react'
import Layout from '../components/Layout'
import { SimpleLoader } from '../components/Loader'
import NextPageArrow from '../components/NextPageArrow'
import useCurrentUser from '../hooks/useCurrentUser'

const TransportButton = ({ selected, onSelect, text, icon }) => (
  <button
    className={`TransportButton${selected ? ' selected' : ''}`}
    onClick={onSelect}
  >
    <i className="material-icons">{icon}</i>
    <p>{text}</p>
  </button>
)

const Transport = () => {
  const [user, loading, updateUser] = useCurrentUser()

  return (
    <Layout>
      <div className="Guest__intro">
        <div className="Guest__intro--heading">
          Nous souhaitons organiser un transport pour les gens venant de région
          Parisienne
        </div>
        <div className="Guest__intro--content">
          Dis nous si tu es intéressé pour venir en bus avec les autres invités
        </div>
      </div>
      {loading || !user ? (
        <div className="HomeEmpty">
          <SimpleLoader />
        </div>
      ) : (
        <div className="Transport__container">
          <TransportButton
            selected={user.needBus}
            onSelect={() => {}}
            text="Trop bien le bus !"
            icon="directions_bus"
          />
          <TransportButton
            selected={!user.needBus}
            onSelect={() => {}}
            text="Je viens en voiture"
            icon="directions_car"
          />
        </div>
      )}
      <NextPageArrow target="/beds" label="Et pour dormir&nbsp;?" />
    </Layout>
  )
}

export default Transport

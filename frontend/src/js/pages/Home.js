import React from 'react'
import Layout from '../components/Layout'
import { SimpleLoader } from '../components/Loader'
import { Link } from 'react-router-dom'
import useCurrentUser from '../hooks/useCurrentUser'

const HomeEmpty = () => {
  return (
    <div className="HomeEmpty">
      <p>
        Tu viens ? Avec qui ?<br />
        Aide nous à organiser ce beau week-end ensemble
      </p>
      <Link to="/guest" className="Button">
        Je viens !
      </Link>
    </div>
  )
}

const Dashboard = () => {
  return (
    <>
      <div className="Guest__intro">
        <div className="Guest__intro--heading">Merci !</div>
        <div className="Guest__intro--content">
          Tu peux à tout moment changer tes infos en utilisant le menu en bas de
          page. <br />
          Nous mettrons cette page à jour avec de nouvelles informations quant
          elles seront disponibles.
        </div>
      </div>
    </>
  )
}

const Home = () => {
  const [user, loading, updateUser] = useCurrentUser()

  return (
    <Layout>
      {loading || !user ? (
        <div className="HomeEmpty">
          <SimpleLoader />
        </div>
      ) : user && user.hasUpdatedInfos ? (
        <Dashboard />
      ) : (
        <HomeEmpty />
      )}
    </Layout>
  )
}

export default Home

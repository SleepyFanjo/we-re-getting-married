import React from 'react'
import Layout from '../components/Layout'
import Link from '../components/Link'
import { SimpleLoader } from '../components/Loader'
import { Link as RouterLink } from 'react-router-dom'
import useCurrentUser from '../hooks/useCurrentUser'

const HomeEmpty = () => {
  return (
    <div className="HomeEmpty">
      <p>
        Tu viens ? Avec qui ?<br />
        Aide nous à organiser ce beau week-end ensemble
      </p>
      <RouterLink to="/guest" className="Button">
        Je viens !
      </RouterLink>
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
          <br />
          Tu peux aussi consulter la Foire Aux Questions ici :
          <Link to="faq" icon="help_outline" />
        </div>
      </div>
    </>
  )
}

const Home = () => {
  const [user, loading] = useCurrentUser()

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

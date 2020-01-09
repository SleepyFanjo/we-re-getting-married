import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

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

const Home = () => {
  return (
    <Layout>
      <HomeEmpty />
    </Layout>
  )
}

export default Home

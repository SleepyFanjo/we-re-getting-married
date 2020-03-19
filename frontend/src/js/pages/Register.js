import React from 'react'
import Layout from '../components/Layout'
import EmailRegister from '../components/EmailRegister'

const Register = () => {
  return (
    <Layout noFooter>
      <div className="Register--container">
        <p>
          Ah ! En voila une bonne nouvelle !<br /> <br />
          Laisse nous ton nom et ton email pour que nous puissions te créer un
          compte sur le site.
          <br />
          Il te permettra de nous confirmer ta venue ainsi que celle de ton
          entourage, réserver ta chambre au château et nous indiquer si tu as un
          régime particulier.
        </p>
        <EmailRegister />
      </div>
    </Layout>
  )
}

export default Register

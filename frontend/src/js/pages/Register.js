import React from 'react'
import EmailRegister from '../components/EmailRegister'

const Register = () => {
  return (
    <div className="Register--container">
      <p>
        Hello, on sera super content de te voir en Septembre. Laisse nous une
        adresse email pour confirmer ta venue, elle nous sera utile pour te
        transmettre toutes les infos.
      </p>
      <EmailRegister />
      <p>
        Tu peux aussi nous confirmer ta venue par téléphone au XX.XX.XX.XX.XX
        <br />
        Ou par email à mariage@gmail.com
      </p>
    </div>
  )
}

export default Register

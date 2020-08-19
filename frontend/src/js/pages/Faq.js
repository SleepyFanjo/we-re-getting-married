import React, { useContext } from 'react'
import Layout from '../components/Layout'
import JwtContext from '../JwtContext'

const FAQ = [
  {
    q: 'Doit-on réserver notre chambre sur place ?',
    a:
      'Non, toutes les chambres du château sont déjà réservées, une petite participation pour la chambre vous sera peut-être demandée, on vous dira.'
  },
  {
    q: "Est-ce qu'il y a un dresscode ?",
    a:
      "Non, il n'y a pas de couleurs ou de thême pour notre mariage. Enfilez votre tenue préférée et votre plus beau sourire"
  },
  {
    q: "Est-ce que je m'habille comme je veux donc ?",
    a:
      'Disons que ça nous ferait plaisir si vous evitez de venir en jean ou en tong, mais sinon oui :)'
  },
  {
    q: 'Tout se passe sur place ?',
    a:
      "Oui, tout se passe au Château de Faverges, quand vous arrivez vous n'avez plus besoin de toucher à votre voiture jusqu'au lendemain."
  },
  {
    q: 'Vous voulez quoi comme cadeau ?',
    a:
      "RIEN ! Il n'y a pas de liste de mariage, on vous a vous et c'est déjà pas mal. Pour ceux que ça perturbe, on mettra peut-être une boîte sur place : on se fera des vacances avec quand on pourra de nouveau voyager"
  },
  {
    q: "Y aura-t-il une cérémonie à la mairie ou à l'église ?",
    a:
      'Rien du tout, il y aura une cérémonie laïque sur place le jour J, le mariage civil à la mairie se fera un autre jour avec simplement nos témoins et quelques parents'
  }
]

const Faq = () => {
  const { jsonWebToken } = useContext(JwtContext)
  return (
    <Layout noFooter={!jsonWebToken}>
      <div className="Faq__container">
        <ul>
          {FAQ.map(item => (
            <li>
              <b>{item.q}</b>
              <br />
              {item.a}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Faq

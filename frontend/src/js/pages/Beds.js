import React, { useRef, useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { SimpleLoader } from '../components/Loader'
import NextPageArrow from '../components/NextPageArrow'
import useCurrentUser from '../hooks/useCurrentUser'

const Beds = () => {
  const [user, loading, updateUser] = useCurrentUser()
  const [mealPref, setMealPref] = useState('')
  const [saving, setSaving] = useState(false)
  const debouncedCall = useRef(null)

  useEffect(() => {
    if (!loading && user) {
      setMealPref(user.mealPref)
    }
  }, [loading])

  const updateMealPref = e => {
    const val = e.target.value

    setMealPref(val)
    setSaving(true)

    if (debouncedCall.current) {
      clearTimeout(debouncedCall.current)
    }

    debouncedCall.current = setTimeout(() => {
      setSaving(false)
      updateUser({
        ...user,
        mealPref: val
      })
    }, 200)
  }

  const setUpdatedInfos = () => {
    updateUser({
      ...user,
      hasUpdatedInfos: true
    })
  }

  return (
    <Layout>
      <div className="Guest__intro">
        <div className="Guest__intro--heading">
          Si tu as des allergies, si t'aimes pas les carottes rapées ou si tu as
          un régime particulier
        </div>
        <div className="Guest__intro--content">
          Dis nous tout c'est le moment, on le dira pas à ta mère
        </div>
      </div>
      {loading || !user ? (
        <div className="HomeEmpty">
          <SimpleLoader />
        </div>
      ) : (
        <div className="Guest__container">
          <textarea
            onChange={updateMealPref}
            value={mealPref}
            className="MealPref__input"
          />
        </div>
      )}
      {saving ? null : (
        <NextPageArrow
          target="/"
          label="C'est fini !"
          onClick={setUpdatedInfos}
        />
      )}
    </Layout>
  )
}

export default Beds

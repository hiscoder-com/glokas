import React from 'react'

import { getUser } from '../actions/getUser'
import CookiesBanner from '../components/CookiesBanner'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

export default async function RootLayout(props: {
  children: React.ReactNode
}): Promise<JSX.Element> {
  const { children } = props

  const { user } = await getUser()

  return (
    <>
      <Navigation user={user} />
      {children}
      <CookiesBanner />
      <Footer />
    </>
  )
}

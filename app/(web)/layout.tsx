import React from 'react'

// import { getUser } from '../actions/getUser'
import CookiesBanner from '../components/CookiesBanner'
import { HeaderBar } from '../components/HeaderBar'
import { NavigationSidebar } from '../components/NavigationSidebar'

export default async function RootLayout(props: {
  children: React.ReactNode
}): Promise<JSX.Element> {
  const { children } = props

  // const { user } = await getUser()

  return (
    <>
      <NavigationSidebar user={{ username: 'Alex' }} />
      <HeaderBar />
      <main className="ml-64 mt-16 overflow-y-auto">{children}</main>
      <CookiesBanner />
    </>
  )
}

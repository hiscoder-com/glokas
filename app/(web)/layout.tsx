import CookiesBanner from '../components/CookiesBanner'
import { HeaderBar } from '../components/HeaderBar'
import { Sidebar } from '../components/Sidebar'

export default async function RootLayout(props: {
  children: React.ReactNode
}): Promise<JSX.Element> {
  const { children } = props

  return (
    <>
      <Sidebar />
      <HeaderBar />
      <main className="ml-64 mt-16 overflow-y-auto">{children}</main>
      <CookiesBanner />
    </>
  )
}

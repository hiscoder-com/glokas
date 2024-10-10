import CookiesBanner from '../components/CookiesBanner'

export const metadata = {
  title: 'Glokas',
  description: `Get God's Message to Every Language, Faster`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-end bg-secondary-50">
        {children}
      </div>
      <CookiesBanner />
    </>
  )
}

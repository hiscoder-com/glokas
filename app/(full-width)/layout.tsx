import CookiesBanner from '../components/CookiesBanner'

export const metadata = {
  title: 'Glokas',
  description: `Get God's Message to Every Language, Faster`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-black-50 flex min-h-screen w-full items-center justify-end">
        {children}
      </div>
      <CookiesBanner />
    </>
  )
}

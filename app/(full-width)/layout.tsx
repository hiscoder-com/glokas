import CookiesBanner from '../components/CookiesBanner'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
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

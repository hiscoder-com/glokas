'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import Cookies from 'js-cookie'

import CookiesModal from './CookiesModal'
import { CustomButton } from './CustomButton'

function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false)

  const handleAcceptAll = () => {
    Cookies.set(
      'userConsent',
      JSON.stringify({
        analytics: true,
        ads: true,
        functional: true,
      }),
      { expires: 365 }
    )
    setShowBanner(false)
  }

  useEffect(() => {
    const consent = Cookies.get('userConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])
  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-neutral-600/90 p-4 text-white">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-small">
              We use cookies to improve your experience and deliver personalized content.
              You can customize the use of cookies or accept all cookies. Read more in our{' '}
              <Link href="/pages/privacy" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="mt-3 flex gap-4 md:mt-0">
              <CookiesModal handleAfterClick={() => setShowBanner(false)}>
                <CustomButton color="secondary">Manage Cookies</CustomButton>
              </CookiesModal>
              <CustomButton color="primary" onClick={handleAcceptAll}>
                Accept All
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CookiesBanner

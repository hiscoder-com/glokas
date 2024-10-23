import { Suspense } from 'react'

import { LogOut } from './LogOut'
import { MainLogo } from './MainLogo'
import { NavigationMenu } from './NavigationMenu'
import { UsageSummary } from './UsageSummary'

const PlaceholderItem = () => (
  <div className="flex items-center gap-3">
    <div className="h-8 w-8 rounded-full bg-primary-200"></div>
    <div className="h-5 w-5/6 animate-pulse rounded-medium bg-primary-200"></div>
  </div>
)
function SearchBarFallback() {
  return (
    <div className="flex flex-col gap-3 rounded-medium bg-primary-100 px-2 py-3">
      <PlaceholderItem />
      <PlaceholderItem />
      <PlaceholderItem />
    </div>
  )
}

export const Sidebar = () => {
  return (
    <nav className="fixed left-0 flex h-[100vh] w-64 flex-col justify-between border-r border-primary-100 bg-primary-50 px-2 pb-6 pt-8 text-black-950">
      <div className="flex flex-col gap-8">
        <div className="mx-auto">
          <MainLogo />
        </div>
        <Suspense fallback={<SearchBarFallback />}>
          <NavigationMenu />
        </Suspense>
      </div>

      <div className="flex flex-col gap-9">
        <UsageSummary />
        <LogOut />
      </div>
    </nav>
  )
}

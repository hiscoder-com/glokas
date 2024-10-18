import { LogOut } from './LogOut'
import { MainLogo } from './MainLogo'
import { NavigationMenu } from './NavigationMenu'
import { UsageSummary } from './UsageSummary'

const user = {
  username: 'VeryVeryLongUsernameInGlokas',
}

export const Sidebar = () => {
  return (
    <nav className="fixed left-0 flex h-[100vh] w-64 flex-col justify-between border border-primary-100 bg-primary-50 px-2 pb-6 pt-8 text-black-950">
      <div className="flex flex-col gap-8">
        <div className="mx-auto">
          <MainLogo />
        </div>
        <NavigationMenu />
      </div>

      <div className="flex flex-col gap-9">
        <UsageSummary />
        <div className="px-2">{user && <LogOut />}</div>
      </div>
    </nav>
  )
}

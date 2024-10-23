export const HeaderBar = () => {
  const user = {
    username: 'VeryVeryLongUsernameInGlokas',
  }
  return (
    <div className="fixed left-64 z-10 flex h-16 w-[calc(100vw-16rem)] items-center justify-end border-b border-primary-100 bg-primary-50 pr-8 text-base text-primary-900">
      {user.username}
    </div>
  )
}

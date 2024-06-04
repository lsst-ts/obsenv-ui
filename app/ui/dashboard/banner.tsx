'use client'

import { useContext, useState } from 'react'
import { getLogin, getUserState } from '@/app/lib/actions'
import { UserState } from '@/app/lib/definitions'
import UserMenu from '@/app/ui/dashboard/user-menu'
import { AuthContext } from '@/app/lib/auth-context'

const Banner = () => {
  const [userState, setUserState] = useState({} as UserState)
  const { setAuthed } = useContext(AuthContext)

  const doLogin = async (event: any) => {
    event.preventDefault()
    await getLogin()
    let s: UserState = await getUserState()
    setUserState((userState) => ({ ...userState, ...s }))
    setAuthed(s.authorized)
  }

  return (
    <header className="fixed top-0 flex grid h-24 grid-cols-6 flex-row md:grid-cols-4">
      <h1 className="col-span-4 py-3 pl-4 text-2xl md:col-span-2">
        Rubin Observatory Environment Management
      </h1>
      {!userState.loggedIn ? (
        <button
          onClick={doLogin}
          className="col-span-1 col-end-7 text-xl hover:bg-gray-600 focus:outline-none active:bg-gray-700 md:col-end-5"
        >
          Login
        </button>
      ) : (
        <UserMenu userState={userState} />
      )}
    </header>
  )
}

export default Banner

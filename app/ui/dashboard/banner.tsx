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
    <header className="h-24 fixed top-0 flex grid grid-cols-6 md:grid-cols-4 flex-row">
      <h1 className="col-span-4 md:col-span-2 py-3 pl-4 text-2xl">
        Rubin Observatory Environment Management
      </h1>
      {!userState.loggedIn ? (
        <button
          onClick={doLogin}
          className="col-span-1 col-end-7 md:col-end-5 text-xl hover:bg-gray-600 focus:outline-none active:bg-gray-700"
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

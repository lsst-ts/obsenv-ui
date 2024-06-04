'use client'

import { useContext, useState } from 'react'
import { getUserData } from '@/app/lib/actions'
import { UserData } from '@/app/lib/definitions'
import UserMenu from '@/app/ui/dashboard/user-menu'
import { AuthContext } from '@/app/lib/auth-context'

const Banner = () => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [userData, setUserData] = useState({} as UserData)
  const { setAuthed } = useContext(AuthContext)

  const doLogin = async (event: any) => {
    event.preventDefault()
    let d: UserData = await getUserData()
    setUserData((userData) => ({ ...userData, ...d }))
    setLoggedIn(d.loggedIn)
    setAuthed(d.groups.find(({ name }) => name === 'authed-users'))
  }

  return (
    <header className="flex grid grid-cols-6 flex-row">
      <h1 className="h-50 col-span-4 py-3 pl-4 text-2xl">
        Rubin Observatory Environment Management
      </h1>
      {!isLoggedIn ? (
        <button
          onClick={doLogin}
          className="col-span-1 col-end-7 text-xl hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 active:bg-gray-700"
        >
          Login
        </button>
      ) : (
        <UserMenu username={userData.username} />
      )}
    </header>
  )
}

export default Banner

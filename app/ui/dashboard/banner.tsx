'use client'

import { useContext, useState } from "react"
import { getUserData } from "@/app/lib/actions"
import { UserData } from "@/app/lib/definitions"
import UserMenu from "@/app/ui/dashboard/user-menu"
import { AuthContext } from "@/app/lib/auth-context"

const Banner = () => {
  let [isLoggedIn, setLoggedIn] = useState(false)
  let [userData, setUserData] = useState({} as UserData)
  let { setAuthed } = useContext(AuthContext)

  const doLogin = async (event: any) => {
    event.preventDefault()
    let d: UserData = await getUserData()
    setUserData(d)
    userData?.loggedIn === undefined ? setLoggedIn(false) : setLoggedIn(userData?.loggedIn)
    setAuthed(true)
  }

  return (
    <header className="flex flex-row grid grid-cols-6">
      <h1 className="h-50 py-3 pl-4 text-2xl col-span-4">
        Rubin Observatory Environment Management
      </h1>
      {!isLoggedIn ? (
      <button onClick={doLogin} className="text-xl col-span-1 col-end-7 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 active:bg-gray-700">
        Login
      </button>
      ) : (
        <UserMenu username={userData.username} />
      )}
    </header>
  );
}

export default Banner
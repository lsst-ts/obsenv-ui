'use client'

import { useContext, useEffect, useState } from 'react'
import useUserState from '@/app/hooks/use-user-state'
import { AuthContext } from '@/app/lib/auth-context'
import { getAuthedGroup } from '@/app/lib/actions'

const Banner = () => {
  const [authGroup, setAuthGroup] = useState('')
  const { userState } = useUserState(authGroup)
  const { authedUser, setAuthedUser } = useContext(AuthContext)

  useEffect(() => {
    const findAuthGroup = async () => {
      let ag = await getAuthedGroup()
      setAuthGroup(ag === undefined ? '' : ag)
    }
    findAuthGroup()
  }, [authGroup])

  useEffect(() => {
    setAuthedUser({
      ...authedUser,
      username: userState.data.username,
      authorized: userState.authorized,
    })
  }, [setAuthedUser, authedUser, userState.data.username, userState.authorized])

  return (
    <header className="fixed top-0 z-10 flex grid h-24 w-screen grid-cols-3 flex-row backdrop-blur-lg md:grid-cols-5">
      <h1 className="col-span-2 py-3 pl-4 text-lg md:col-span-3 md:text-xl">
        Rubin Observatory Environment Management
      </h1>
      <h2 className="col-span-1 col-end-4 py-3 pr-4 md:col-end-6 md:text-lg">
        {!userState.data ? 'Welcome!' : userState.data.username}
      </h2>
    </header>
  )
}

export default Banner

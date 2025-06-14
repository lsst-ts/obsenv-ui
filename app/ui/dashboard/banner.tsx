'use client'

import { useContext, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import useUserState from '@/app/hooks/use-user-state'
import { AuthContext } from '@/app/lib/auth-context'
import { getAuthedGroup } from '@/app/lib/actions'

const Banner = () => {
  const [authGroup, setAuthGroup] = useState('')
  const { userState } = useUserState(authGroup)
  const { authedUser, setAuthedUser } = useContext(AuthContext)
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const findAuthGroup = async () => {
      let ag = await getAuthedGroup()
      setAuthGroup(ag === undefined ? '' : ag)
    }
    findAuthGroup()
  }, [authGroup])

  useEffect(() => {
    setAuthedUser({
      username: userState.data.username,
      uid: userState.data.uid,
      authorized: userState.authorized,
    })
  }, [
    setAuthedUser,
    userState.data.username,
    userState.data.uid,
    userState.authorized,
  ])

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    if (authedUser.username === undefined) {
      return
    }
    params.set('currentUser', authedUser.username)
    params.set('currentUid', authedUser.uid.toString())
    replace(`${pathname}?${params.toString()}`)
  }, [authedUser.username, authedUser.uid, pathname, replace, searchParams])

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

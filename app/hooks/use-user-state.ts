'use client'
import useSWR, { Fetcher } from 'swr'
import { UserData, UserState } from '@/app/lib/definitions'

const fetcher: Fetcher<UserData, string> = (api: string) =>
  fetch(api).then((res) => res.json())

/*
 * A React hook for getting data from the `/auth/user-info` endpoint and
 * establishing in general whether the user is logged in.
 */
function useUserState() {
  var userState: UserState = {
    loggedIn: false,
    authorized: false,
    data: {} as UserData,
  }
  let env = process.env.NODE_ENV
  var userInfoApi: string
  if (env === 'development') {
    userInfoApi = '/api/dev/user-info'
  } else if (env === 'production') {
    userInfoApi = '/auth/api/v1/user-info'
  } else {
    throw Error(`Cannot get user state for ${env} environment!`)
  }

  const { data, error, isLoading } = useSWR<UserData, Error>(
    userInfoApi,
    fetcher,
  )

  if (error) {
    throw Error(error.message)
  }

  const isLoggedIn = !error && data && data.hasOwnProperty('username')

  if (isLoggedIn) {
    userState.loggedIn = isLoggedIn
    userState.data = data

    const env = process.env
    userState.authorized =
      data.groups.find(({ name }) => name === env.NEXT_PUBLIC_AUTH_GROUP) ===
      undefined
        ? false
        : true
  }
  return {
    userState: userState,
    isLoading,
  }
}

export default useUserState

'use server'

import { revalidatePath } from 'next/cache'
import { devAuthedUserData, devUnauthedUserData } from './dev-data'
import { UserData, UserState } from './definitions'
import { getLoginUrl, getLogoutUrl } from './urls'

export async function refreshPackageInfo() {
  revalidatePath('dashboard')
}

export const getLogin = async () => {
  let env = process.env.NODE_ENV
  if (env === 'development') {
    return true
  } else if (env === 'production') {
    let baseUrl = process.env.BASE_URL
    if (baseUrl === undefined) {
      throw Error('Base URL must be provided to application!')
    }
    const loginUrl = getLoginUrl(baseUrl)
    const res = await fetch(loginUrl)
    if (res.ok) {
      return true
    } else {
      throw Error('Could not login!')
    }
  } else {
    throw Error(`Don't know how to login for ${env} environment!`)
  }
}

export async function getLogout() {
  let env = process.env.NODE_ENV
  if (env === 'development') {
    return true
  } else if (env === 'production') {
    let baseUrl = process.env.BASE_URL
    if (baseUrl === undefined) {
      throw Error('Base URL must be provided to application!')
    }
    const logoutUrl = getLogoutUrl(baseUrl)
    const res = await fetch(logoutUrl)
    if (res.ok) {
      return true
    } else {
      throw Error('Could not logout!')
    }
  } else {
    throw Error(`Don't know how to logout for ${env} environment!`)
  }
}

export const getUserState = async (): Promise<UserState> => {
  var userState: UserState
  var data: UserData
  let env = process.env.NODE_ENV
  if (env === 'development') {
    let userType = process.env.USER_TYPE
    if (userType === 'AUTHED') {
      data = devAuthedUserData()
    } else {
      data = devUnauthedUserData()
    }
    userState = { loggedIn: true, authorized: false, data: data }
  } else if (env === 'production') {
    let baseUrl = process.env.BASE_URL
    if (baseUrl === undefined) {
      throw Error('Base URL must be provided to application!')
    }
    const userInfoUrl = new URL('/auth/api/v1/user-info', baseUrl)
    const res = await fetch(userInfoUrl, { cache: 'no-store' })
    if (!res.ok) {
      console.log(res.status)
      console.log(res.statusText)
      throw new Error('Unable to fetch user information data.')
    }
    data = await res.json()
    userState = {
      loggedIn: data && data.hasOwnProperty('username'),
      authorized: false,
      data: data,
    }
  } else {
    throw Error(`Don't know how to get user data for ${env} environment!`)
  }
  const auth_group = process.env.AUTH_GROUP
  userState.authorized =
    data.groups.find(({ name }) => name === auth_group) === undefined
      ? false
      : true

  return new Promise<UserState>((resolve, reject) => {
    resolve(userState), reject('')
  })
}

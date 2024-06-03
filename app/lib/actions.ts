'use server'

import { revalidatePath } from 'next/cache'
import { devAuthedUserData, devUnauthedUserData } from './dev-data'
import { UserData } from './definitions'
import { getLoginUrl, getLogoutUrl } from './urls'

export async function refreshPackageInfo() {
  revalidatePath('dashboard')
}

export async function showProcEnv() {
  console.log(process.env)
}

export async function getSetup() {
  let appEnv = `${process.env.APP_ENV}`
  return {
    appEnv,
  }
}

export async function getLogin() {
  let devEnv = process.env?.APP_ENV === undefined ? false : true
  if (devEnv) {
    return true
  } else {
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
  }
}

export async function getLogout() {
  let devEnv = process.env?.APP_ENV === undefined ? false : true
  if (devEnv) {
    return true
  } else {
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
  }
}

export async function getUserData(): Promise<UserData> {
  var data: UserData
  let devEnv = process.env?.APP_ENV === undefined ? false : true
  if (devEnv) {
    let userType = `${process.env.USER_TYPE}`
    if (userType === 'AUTHED') {
      data = { ...devAuthedUserData(), loggedIn: true }
    } else {
      data = { ...devUnauthedUserData(), loggedIn: true }
    }
  } else {
    let baseUrl = process.env.BASE_URL
    if (baseUrl === undefined) {
      throw Error('Base URL must be provided to application!')
    }
    const userInfoUrl = new URL('/auth/api/v1/user-info', baseUrl)
    const res = await fetch(userInfoUrl, { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Unable to fetch user information data.')
    }
    const tempData = await res.json()
    data = { ...tempData, loggedIn: true }
  }
  return new Promise<UserData>((resolve, reject) => {
    resolve(data), reject('')
  })
}

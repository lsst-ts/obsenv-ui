'use client'

import { createContext, useState } from 'react'
import { AuthedUser } from '@/app/lib/definitions'

interface Authed {
  authedUser: AuthedUser
  setAuthedUser: Function
}

export const AuthContext = createContext<Authed>({} as Authed)
AuthContext.displayName = 'AuthContext'

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  let [authedUser, setAuthedUser] = useState({
    username: 'demouser',
    authorized: false,
  } as AuthedUser)

  return (
    <AuthContext.Provider
      value={{ authedUser: authedUser, setAuthedUser: setAuthedUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

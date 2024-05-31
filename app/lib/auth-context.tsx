'use client'

import { createContext, useState } from 'react'

interface Authed {
  isAuthed: boolean
  setAuthed: Function
}

export const AuthContext = createContext<Authed>({} as Authed)
AuthContext.displayName = 'AuthContext'

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  let [isAuthed, setAuthed] = useState(false)

  return <AuthContext.Provider value={{isAuthed: isAuthed, setAuthed: setAuthed}}>{children}</AuthContext.Provider>
}

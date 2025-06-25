import { UserData } from '@/app/lib/definitions'

export const devAuthedUserData = (): UserData => {
  return {
    username: 'vera',
    uid: 280723,
    name: 'Vera C. Rubin',
    groups: [
      {
        name: 'normal-users',
        id: 1,
      },
      {
        name: 'authed-users',
        id: 2,
      },
    ],
  }
}

export const devUnauthedUserData = (): UserData => {
  return {
    username: 'demouser',
    uid: 123456,
    name: 'Demo User',
    groups: [
      {
        name: 'normal-users',
        id: 1,
      },
    ],
  }
}

import { UserData } from "./definitions"

export const devAuthedUserData = (): UserData => {
  return {
    "loggedIn": false,
    "username": "vera",
    "name": "Vera C. Rubin",
    "groups": ["normal-users", "authed-users"]
  }
}

export const devUnauthedUserData = (): UserData => {
  return {
    "loggedIn": false,
    "username": "demouser",
    "name": "Demo User",
    "groups": ["normal-users"]
  }
}

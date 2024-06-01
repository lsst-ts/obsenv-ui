import { UserData } from "./definitions"

export const devAuthedUserData = (): UserData => {
  return {
    "loggedIn": false,
    "username": "vera",
    "name": "Vera C. Rubin",
    "groups": [
      {
        "name": "normal-users",
        "id": 1
      },
      {
        "name": "authed-users",
        "id": 2
      }]
  }
}

export const devUnauthedUserData = (): UserData => {
  return {
    "loggedIn": false,
    "username": "demouser",
    "name": "Demo User",
    "groups": [{
      "name": "normal-users",
      "id": 1
    }]
  }
}
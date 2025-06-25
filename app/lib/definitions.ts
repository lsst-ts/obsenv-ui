export type PackageResponse = {
  fetch_datetime: string
  packages: Array<PackageInfo>
}

export type PackageInfo = {
  name: string
  current_version: string
  original_version: string
  is_different: boolean
}

export type UserData = {
  name: string
  username: string
  uid: number
  groups: Array<Group>
}

export type Group = {
  name: string
  id: number
}

export type UserState = {
  loggedIn: boolean
  authorized: boolean
  data: UserData
}

export type AuthedUser = {
  username: string | undefined
  uid: number | undefined
  authorized: boolean
}

export type PackageUpdate = {
  name: string
  version: string
  is_tag: boolean
  userid: string
}

export type SearchParams = { currentUser: string }

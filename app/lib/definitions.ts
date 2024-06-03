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
  loggedIn: boolean
  name: string
  username: string
  groups: Array<Group>
}

export type Group = {
  name: string
  id: number
}

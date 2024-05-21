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

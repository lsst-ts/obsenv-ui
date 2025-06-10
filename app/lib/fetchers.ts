import { Fetcher } from 'swr'
import { PackageResponse } from '@/app/lib/definitions'

export const prFetcher: Fetcher<PackageResponse, [string, Headers]> = async ([
  url,
  header,
]) => {
  const res = await fetch(url, {
    headers: header,
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Unable to fetch package data.')
  }
  const data = await res.json()
  return data
}

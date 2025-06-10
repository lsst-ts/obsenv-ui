'use client'

import { useContext, useEffect, useState, useTransition } from 'react'
import useSWR, { Fetcher } from 'swr'
import PackageTable from '@/app/ui/dashboard/package-table'
import Footer from '@/app/ui/dashboard/footer'
// import { getPackages } from '@/app/lib/actions'
import { PackageResponse } from '@/app/lib/definitions'
import { prFetcher } from '@/app/lib/fetchers'
import { AuthContext } from '@/app/lib/auth-context'

const fallbackResponse = {
  packages: [],
  fetch_datetime: '',
}

const PackageInfoWrapper = () => {
  let { authedUser } = useContext(AuthContext)
  // let [response, setResponse] = useState<PackageResponse>(fallbackResponse)
  let [isPending, startTransition] = useTransition()

  const url = `${process.env.NEXT_PUBLIC_OBSENV_API}/package_versions`
  console.log(authedUser)
  let header = new Headers({
    'Obsenv-User-Name': authedUser.username,
    'Obsenv-User-ID': authedUser.uid?.toString(),
  })
  const fallback = {
    url: fallbackResponse,
  }

  const { data } = useSWR<PackageResponse>([url, header], prFetcher, {
    suspense: true,
    fallback: fallback,
  })
  const response = data === undefined ? fallbackResponse : data
  // setResponse(data === undefined ? fallbackResponse : data)

  // useEffect(() => {
  //   startTransition(async () => {

  //     setResponse(data === undefined ? fallbackResponse : data)
  //   })
  // }, [authedUser])

  return (
    <>
      <PackageTable packages={response.packages} />
      <Footer datetime={response.fetch_datetime} />
    </>
  )
}

export default PackageInfoWrapper

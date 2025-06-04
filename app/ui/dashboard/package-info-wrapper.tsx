'use client'

import { useContext, useEffect, useState, useTransition } from 'react'
import PackageTable from '@/app/ui/dashboard/package-table'
import Footer from '@/app/ui/dashboard/footer'
import { getPackages } from '@/app/lib/actions'
import { PackageResponse } from '@/app/lib/definitions'
import { AuthContext } from '@/app/lib/auth-context'

const PackageInfoWrapper = () => {
  let { authedUser } = useContext(AuthContext)
  let [response, setResponse] = useState<PackageResponse>({
    packages: [],
    fetch_datetime: '',
  })
  let [isPending, startTransition] = useTransition()

  useEffect(() => {
    startTransition(async () => {
      setResponse(await getPackages(authedUser))
    })
  }, [authedUser])

  return (
    <>
      <PackageTable packages={response.packages} />
      <Footer datetime={response.fetch_datetime} />
    </>
  )
}

export default PackageInfoWrapper

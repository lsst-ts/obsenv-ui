import { useContext } from 'react'
import PackageTable from '@/app/ui/dashboard/package-table'
import Footer from '@/app/ui/dashboard/footer'
import { getPackages } from '@/app/lib/actions'
import { PackageResponse } from '@/app/lib/definitions'
import { AuthContext } from '@/app/lib/auth-context'

const PackageInfoWrapper = async () => {
  let authedUser = useContext(AuthContext)?.authedUser

  const response: PackageResponse = await getPackages(authedUser)

  return (
    <>
      <PackageTable packages={response.packages} />
      <Footer datetime={response.fetch_datetime} />
    </>
  )
}

export default PackageInfoWrapper

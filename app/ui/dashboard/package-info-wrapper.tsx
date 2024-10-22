import PackageTable from '@/app/ui/dashboard/package-table'
import Footer from '@/app/ui/dashboard/footer'
import { getPackages } from '@/app/lib/actions'
import { PackageResponse } from '@/app/lib/definitions'

const PackageInfoWrapper = async () => {
  const response: PackageResponse = await getPackages()

  return (
    <>
      <PackageTable packages={response.packages} />
      <Footer datetime={response.fetch_datetime} />
    </>
  )
}

export default PackageInfoWrapper

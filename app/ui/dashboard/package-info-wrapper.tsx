import PackageTable from '@/app/ui/dashboard/package-table'
import Footer from '@/app/ui/dashboard/footer'
import { PackageResponse, SearchParams } from '@/app/lib/definitions'
import { getApiUrl } from '@/app/lib/actions'

const PackageInfoWrapper = async ({
  searchParams,
}: {
  searchParams: SearchParams
}) => {
  // if (searchParams.currentUser === undefined) {
  //   return
  // }
  console.log(searchParams.currentUser)
  const uri = await getApiUrl()
  const url = `${uri}/package_versions`
  console.log(url)
  const header = new Headers({
    'Obsenv-User-Name': `${searchParams.currentUser}`,
  })
  const res = await fetch(url, { headers: header, cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('Unable to fetch package data.')
  }
  const response: PackageResponse = await res.json()

  return (
    <>
      <PackageTable packages={response.packages} />
      <Footer datetime={response.fetch_datetime} />
    </>
  )
}

export default PackageInfoWrapper

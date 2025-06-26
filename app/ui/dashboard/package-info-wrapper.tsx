import { cookies } from 'next/headers'
import PackageTable from '@/app/ui/dashboard/package-table'
import Footer from '@/app/ui/dashboard/footer'
import { PackageResponse } from '@/app/lib/definitions'
import { getApiUrl } from '@/app/lib/actions'

const PackageInfoWrapper = async () => {
  const uid = (await cookies()).get('user-id')?.value ?? '-1'
  if (uid === '-1') {
    console.log('Blocking')
    return
  }
  console.log(`A: ${uid}`)
  const uri = await getApiUrl()
  const url = `${uri}/package_versions`
  console.log(url)
  const header = new Headers({
    'Obsenv-User-Id': uid,
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

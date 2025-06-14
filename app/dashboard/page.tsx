import { Suspense, use } from 'react'
import Banner from '@/app/ui/dashboard/banner'
import Toolbar from '@/app/ui/dashboard/toolbar'
import { Skeleton } from '@/app/ui/skeletons'
import PackageInfoWrapper from '@/app/ui/dashboard/package-info-wrapper'
import { SearchParams } from '@/app/lib/definitions'

const Dashboard = async (props: { searchParams: Promise<SearchParams> }) => {
  const searchParams = await props.searchParams
  return (
    <main>
      <Banner />
      <Toolbar />
      <Suspense fallback={<Skeleton />}>
        searchParams.username &&{' '}
        <PackageInfoWrapper searchParams={searchParams} />
      </Suspense>
    </main>
  )
}

export default Dashboard

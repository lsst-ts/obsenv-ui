import { Suspense, use } from 'react'
import Banner from '@/app/ui/dashboard/banner'
import Toolbar from '@/app/ui/dashboard/toolbar'
import { Skeleton } from '@/app/ui/skeletons'
import PackageInfoWrapper from '@/app/ui/dashboard/package-info-wrapper'
import { SearchParams } from '@/app/lib/definitions'

const Dashboard = async ({ searchParams }: { searchParams: SearchParams }) => {
  const sp = await searchParams
  return (
    <main>
      <Banner />
      <Toolbar />
      <Suspense fallback={<Skeleton />}>
        sp.username && <PackageInfoWrapper searchParams={sp} />
      </Suspense>
    </main>
  )
}

export default Dashboard

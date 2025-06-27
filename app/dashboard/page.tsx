import { Suspense } from 'react'
import Banner from '@/app/ui/dashboard/banner'
import Toolbar from '@/app/ui/dashboard/toolbar'
import { Skeleton } from '@/app/ui/skeletons'
import PackageInfoWrapper from '@/app/ui/dashboard/package-info-wrapper'

const Dashboard = () => {
  return (
    <main>
      <Banner />
      <Toolbar />
      <Suspense fallback={<Skeleton />}>
        <PackageInfoWrapper />
      </Suspense>
    </main>
  )
}

export default Dashboard

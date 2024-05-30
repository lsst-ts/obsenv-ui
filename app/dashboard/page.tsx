import { Suspense } from 'react'
import Banner from '@/app/ui/dashboard/banner'
import Toolbar from '@/app/ui/dashboard/toolbar'
import PackageInfoWrapper from '@/app/ui/dashboard/package-info-wrapper'
import { Skeleton } from '@/app/ui/skeletons'

const Dashboard = () => {
  return (
    <main>
      <Banner />
      <aside className="w-50 fixed left-0 flex h-screen flex-col">
        <Toolbar />
      </aside>
      <Suspense fallback={<Skeleton />}>
        <PackageInfoWrapper />
      </Suspense>
    </main>
  )
}

export default Dashboard

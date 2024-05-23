import { Suspense } from 'react'
import Toolbar from '@/app/ui/dashboard/toolbar'
import PackageInfoWrapper from '@/app/ui/dashboard/package-info-wrapper'
import { Skeleton } from '@/app/ui/skeletons'

const Dashboard = () => {
  return (
    <main>
      <h1 className="h-50 pb-3 pl-4 pt-1 text-2xl">
        Rubin Observatory Environment Management
      </h1>
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

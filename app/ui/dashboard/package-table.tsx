import { Suspense } from 'react'
import BoxCard from './box-card'
import { Skeleton } from '@/app/ui/skeletons'
import { PackageInfo } from '@/app/lib/definitions'

const PackageTable = async ({ packages }: { packages: Array<PackageInfo> }) => {

  return (
    <section className="ml-50">
      <div className="max-w-m mx-5 px-4">
        <h2 className="full-width item-center font-semi-bold p-3 text-center text-xl">
          Package Information
        </h2>
        <div className="item-center mb-4 grid justify-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <BoxCard
              key={i}
              name={p.name}
              current_version={p.current_version}
              original_version={p.original_version}
              is_different={p.is_different}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PackageTable

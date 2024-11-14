const SkeletonBox = () => {
  return (
    <div className="max-w-sm overflow-hidden rounded bg-gray-400 shadow-md shadow-gray-600 dark:bg-gray-900 dark:shadow-gray-400">
      <div className="item-center animate-pulse bg-gray-200 py-3 dark:bg-gray-600" />
      <div className="m-2 grid grid-cols-3">
        <div className="col-span-1 h-10 animate-pulse bg-gray-200 dark:bg-gray-600" />
        <div className="col-span-2 h-10 animate-pulse bg-gray-200 px-2 dark:bg-gray-600" />
        <div className="col-span-1 h-10 animate-pulse bg-gray-200 dark:bg-gray-600" />
        <div className="col-span-2 h-10 animate-pulse bg-gray-200 px-2 dark:bg-gray-600" />
      </div>
      <div className="mx-4 mb-4 grid grid-cols-4">
        <div className="col-span-1 col-end-5">
          <div className="h-10 animate-pulse rounded bg-gray-300 p-3 shadow-md shadow-gray-600 dark:bg-gray-800 dark:shadow-gray-400" />
        </div>
      </div>
    </div>
  )
}

const SkeletonFooter = () => {
  return (
    <footer>
      <div className="items-centered flex flex-row">
        <p>Last Updated:</p>
        <div className="items-centered h-4 flex-grow animate-pulse bg-gray-300 dark:bg-gray-600" />
      </div>
    </footer>
  )
}

const SkeletonPackageTable = () => {
  return (
    <section className="ml-9 mt-24">
      <div className="max-w-m m-5 p-4">
        <h2 className="full-width item-center font-semi-bold p-3 text-center text-xl">
          Package Information
        </h2>
        <div className="item-center mb-4 grid justify-center gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <SkeletonBox key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export const Skeleton = () => {
  return (
    <>
      <SkeletonPackageTable />
      <SkeletonFooter />
    </>
  )
}

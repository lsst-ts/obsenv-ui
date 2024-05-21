export const SkeletonBox = () => {
  return (
    <div className="max-w-sm overflow-hidden rounded bg-gray-900 shadow-md shadow-gray-400">
      <div className="item-center animate-pulse bg-gray-600 py-3" />
      <div className="m-2 grid grid-cols-3">
        <div className="col-span-1 h-10 animate-pulse bg-gray-600" />
        <div className="col-span-2 h-10 animate-pulse bg-gray-600 px-2" />
        <div className="col-span-1 h-10 animate-pulse bg-gray-600" />
        <div className="col-span-2 h-10 animate-pulse bg-gray-600 px-2" />
      </div>
      <div className="mx-2 mb-4 grid grid-cols-6">
        <div className="col-span-1 col-end-7">
          <div className="h-10 animate-pulse rounded bg-gray-800 p-3" />
        </div>
      </div>
    </div>
  )
}

export const Skeleton = () => {
  console.log('Skeleton')
  return (
    <div className="z-40 mb-4 grid grid-cols-3 gap-y-5">
      <SkeletonBox />
      <SkeletonBox />
      <SkeletonBox />
    </div>
  )
}

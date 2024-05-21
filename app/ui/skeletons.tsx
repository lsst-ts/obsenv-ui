export const SkeletonBox = () => {
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-md shadow-gray-400 bg-gray-900">
            <div className="animate-pulse bg-gray-600 item-center py-3" />
            <div className="grid grid-cols-3 m-2">
                <div className="animate-pulse bg-gray-600 h-10 col-span-1" />
                <div className="animate-pulse bg-gray-600 h-10 px-2 col-span-2" />
                <div className="animate-pulse bg-gray-600 h-10 col-span-1" />
                <div className="animate-pulse bg-gray-600 h-10 px-2 col-span-2" />
            </div>
            <div className="grid grid-cols-6 mx-2 mb-4">
                <div className="col-end-7 col-span-1">
                    <div className="animate-pulse rounded h-10 bg-gray-800 p-3" />
                </div>
            </div>
        </div>
    );
}

export const Skeleton = () => {
    console.log("Skeleton")
    return(
        <div className="grid grid-cols-3 gap-y-5 mb-4 z-40">
            <SkeletonBox />
            <SkeletonBox />
            <SkeletonBox />
        </div>
    );
}

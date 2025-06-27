'use client'

import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { refreshPackageInfo } from '@/app/lib/actions'

const Toolbar = () => {
  const router = useRouter()

  const refresh = async () => {
    await refreshPackageInfo()
    router.refresh()
  }

  return (
    <aside className="fixed left-0 mt-24 flex w-9 flex-col">
      <button
        onClick={() => refresh()}
        className="m-1 h-7 w-7 rounded p-1 shadow-sm shadow-gray-400 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 active:bg-gray-700"
      >
        <ArrowPathIcon />
      </button>
    </aside>
  )
}

export default Toolbar

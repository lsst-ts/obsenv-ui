'use client'

import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

const Toolbar = () => {
  const router = useRouter()

  return (
    <aside className="w-9 mt-24 fixed left-0 flex flex-col">
      <button
        onClick={() => router.refresh()}
        className="m-1 h-7 w-7 rounded p-1 shadow-sm shadow-gray-400 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 active:bg-gray-700"
      >
        <ArrowPathIcon className="text-white" />
      </button>
    </aside>
  )
}

export default Toolbar

'use client'

import { useContext } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { PackageInfo } from '@/app/lib/definitions'
import { AuthContext } from '@/app/lib/auth-context'

const BoxCard = ({
  name,
  current_version,
  original_version,
  is_different,
}: PackageInfo) => {
  let isAuthed = useContext(AuthContext)?.authedUser.authorized
  const router = useRouter()

  const onClick = () => {
    console.log('Change button clicked')
    router.push(`/dashboard/change?package_name=${name}`)
  }

  return (
    <div className="h-350 w-375 m-2 max-w-sm overflow-hidden rounded bg-gray-400 shadow-md shadow-gray-600 dark:bg-gray-900 dark:shadow-gray-400">
      <div className="text-m item-center py-3 text-center font-bold">
        {name}
      </div>
      <div className="m-2 grid grid-cols-3">
        <div className="text-m col-span-1 text-center">Current:</div>
        <div className="text-m col-span-2 px-2">{current_version}</div>
        <div className="text-m col-span-1 text-center">Original:</div>
        <div className="text-m col-span-2 px-2">{original_version}</div>
      </div>
      <div className="items-centered mx-4 mb-4 flex grid grid-cols-4">
        <div className="col-span-1 col-end-5">
          <button
            aria-disabled={!isAuthed}
            disabled={!isAuthed}
            onClick={onClick}
            className={clsx(
              'rounded',
              'shadow-md',
              'shadow-gray-600',
              'dark:shadow-gray-400',
              'bg-gray-300',
              'dark:bg-gray-800',
              'p-2',
              {
                'hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-800 active:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-300 dark:active:bg-gray-700':
                  isAuthed,
                'fg-gray-800 dark:fg-gray-200 text-gray-200 dark:text-gray-700':
                  !isAuthed,
              },
            )}
          >
            Change
          </button>
        </div>
      </div>
    </div>
  )
}

export default BoxCard

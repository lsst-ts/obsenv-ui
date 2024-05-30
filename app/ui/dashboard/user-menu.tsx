import { ChevronDownIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import { useState } from "react"

const UserMenu = ({ username }: { username: string }) => {
  const [isClicked, setClicked] = useState(false)

  return (
    <div className='col-span-1 col-end-7 place-content-center items-centered'>
      <button onClick={() => { setClicked(!isClicked) }}>
        <div className='flex justify-between items-centered'>
          <span className='text-xl pr-2'>{username}</span>
          <ChevronDownIcon className={clsx(
            'h-8',
            'w-8',
            'pl-2',
            {
              'rotate-180': isClicked,
            }
          )} />
        </div>
      </button>
      <div className={clsx(
        'flex',
        'flex-column',
        'absolute',
        'rounded',
        'bg-gray-600',
        'p-2',
        'w-32',
        'justify-end',
        {
          'visible': isClicked,
          'invisible': !isClicked
        }
      )}>
        <a href="/logout">Log out</a>
      </div>
    </div>
  )
}

export default UserMenu

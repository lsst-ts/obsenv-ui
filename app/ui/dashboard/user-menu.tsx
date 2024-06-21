import { redirect } from 'next/navigation'
import { getLogout } from '@/app/lib/actions'
import { UserState } from '@/app/lib/definitions'
import { AuthContext } from '@/app/lib/auth-context'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useContext, useState } from 'react'

const UserMenu = ({ userState }: { userState: UserState }) => {
  const [isClicked, setClicked] = useState(false)
  const [doRedirect, setRedirect] = useState(false)
  const { setAuthed } = useContext(AuthContext)

  const doLogout = async (event: any) => {
    event.preventDefault()
    let isLoggedIn = !(await getLogout())
    console.log(isLoggedIn)
    userState.loggedIn = isLoggedIn
    userState.authorized = false
    setAuthed(userState.authorized)
    setRedirect(true)
  }

  if (doRedirect) {
    redirect('/dashboard')
  }

  return (
    <div className="items-centered relative col-span-1 col-end-4 flex place-content-center md:col-end-6">
      <button
        onClick={() => {
          setClicked(!isClicked)
        }}
      >
        <div className="items-centered flex justify-between">
          <span className="pr-2 text-xl">{userState.data.username}</span>
          <ChevronDownIcon
            className={clsx('h-8', 'w-8', 'pl-2', {
              'rotate-180': isClicked,
            })}
          />
        </div>
      </button>
      <div
        className={clsx(
          'flex',
          'flex-col',
          'absolute',
          '-bottom-6',
          'rounded',
          'bg-gray-600',
          'p-2',
          'w-32',
          'text-right',
          {
            visible: isClicked,
            invisible: !isClicked,
          },
        )}
      >
        <button onClick={doLogout} className="text-right">
          Log out
        </button>
      </div>
    </div>
  )
}

export default UserMenu

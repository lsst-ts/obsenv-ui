'use client'

import { useContext } from 'react'
import { useSearchParams } from 'next/navigation'
import { PackageUpdate } from '@/app/lib/definitions'
import { updatePackage } from '@/app/lib/data_fetching'
import { AuthContext } from '@/app/lib/auth-context'

const Form = () => {
  const searchParams = useSearchParams()
  let { authedUser } = useContext(AuthContext)
  if (authedUser.username === undefined) {
    return
  }
  let authedUsername = authedUser.username
  let authedUserid = authedUser.uid.toString()
  const packageName = searchParams.get('package_name')

  const dispatch = async (formData: FormData) => {
    console.log('OK')
    const version = formData.get('version')
    const versionValue = version === null ? '' : version.toString()
    const isTag = formData.get('isTag')
    const isTagValue = isTag === null ? false : !!isTag.toString()
    const info: PackageUpdate = {
      name: packageName === null ? '' : packageName,
      version: versionValue,
      is_tag: isTagValue,
      username: authedUsername,
      userid: authedUserid,
    }
    console.log(info)
    await updatePackage(info)
  }

  return (
    <div className="flex h-screen items-center justify-center ">
      <form action={dispatch} className="ml-3 mt-3 flex grid grid-cols-4">
        <div className="col-span-4 py-3">
          <label>Package Name: {packageName}</label>
        </div>
        <div className="col-span-4 py-3">
          <label className="pr-2">
            Version
            <input
              id="version"
              name="version"
              type="text"
              defaultValue=""
              className="text-black"
              required
            />
          </label>
        </div>
        <div className="col-span-4 py-3">
          <label className="pr-2">
            Is Tag?
            <input id="isTag" name="isTag" type="checkbox" />
          </label>
        </div>
        <div className="col-span-1 py-3">
          <button className="rounded bg-gray-300 p-2 shadow-md shadow-gray-600 hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-800 active:bg-gray-500 dark:bg-gray-800 dark:shadow-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-300 dark:active:bg-gray-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form

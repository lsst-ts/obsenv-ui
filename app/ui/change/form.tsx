'use client'

import { useContext } from 'react'
import { useSearchParams } from 'next/navigation'
import { PackageUpdate } from '@/app/lib/definitions'
import { updatePackage } from '@/app/lib/actions'
import { AuthContext } from '@/app/lib/auth-context'

const Form = () => {
  let autherUsername = useContext(AuthContext)?.authedUser.username
  const searchParams = useSearchParams()
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
      username: autherUsername,
    }
    console.log(info)
    await updatePackage(info)
  }

  return (
    <form action={dispatch} className="ml-3 mt-3 flex grid grid-cols-4">
      <div className="col-span-4 py-3">
        <label>Package Name: {packageName}</label>
      </div>
      <div className="col-span-4 py-3">
        <label className="pr-2">Version</label>
        <input
          id="version"
          name="version"
          type="text"
          defaultValue=""
          className="text-black"
          required
        />
      </div>
      <div className="col-span-4 py-3">
        <label className="pr-2">Is Tag?</label>
        <input id="isTag" name="isTag" type="checkbox" />
      </div>
      <div className="col-span-1 py-3">
        <button className="rounded bg-gray-300 p-2 shadow-md shadow-gray-600 hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-800 active:bg-gray-500 dark:bg-gray-800 dark:shadow-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-300 dark:active:bg-gray-700">
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form

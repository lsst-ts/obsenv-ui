'use client'

import { useSearchParams } from 'next/navigation'

const Form = () => {
  const searchParams = useSearchParams()
  const package_name = searchParams.get('package_name')

  function dispatch(formData: FormData) {
    console.log('OK')
  }

  return (
    <form action={dispatch} className="ml-3 mt-3 flex grid grid-cols-4">
      <div className="col-span-4 py-3">
        <label>Package Name: {package_name}</label>
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
        <button className="rounded bg-gray-800 p-2 shadow-md shadow-gray-400">
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form

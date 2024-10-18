'use server'

import { revalidateTag } from 'next/cache'
import { PackageUpdate } from '@/app/lib/definitions'
import { redirect } from 'next/navigation'

export async function refreshPackageInfo() {
  revalidateTag('package_versions')
}

export async function getAuthedGroup() {
  let authed_group = process.env.AUTH_GROUP
  return authed_group
}

export async function updatePackage(info: PackageUpdate) {
  let api_server = process.env.OBSENV_API
  if (api_server === undefined) {
    throw Error('OBSENV_API must be provided to the application!')
  }
  const url = `${api_server}/update_package`
  console.log(url)
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(info),
  })
  if (res.ok) {
    await refreshPackageInfo()
    redirect('/dashboard')
  } else {
    const body = await res.json()
    console.log(body)
    var msg: string
    let detail = body['detail']
    if (Array.isArray(detail)) {
      msg = detail[0]['msg']
    } else {
      msg = detail
    }
    throw Error(`Code: ${res.status} - ${msg}`)
  }
}

'use server'

import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { PackageUpdate } from '@/app/lib/definitions'
import { redirect } from 'next/navigation'

const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay))

export async function getPackages() {
  const url = `${process.env.OBSENV_API}/package_versions`
  console.log(url)
  const cookieStore = await cookies()
  let username = cookieStore.get('currentUser')?.value
  let userid = cookieStore.get('currentUid')?.value
  console.log('A')
  console.log(username)
  console.log(userid)
  console.log(cookieStore.get('gafaelfawr')?.value)
  const header = new Headers({
    'Obsenv-User-Name': username === undefined ? '' : username,
    'Obsenv-User-ID': userid === undefined ? '' : userid,
  })
  const res = await fetch(url, { headers: header, cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Unable to fetch package data.')
  }
  const data = await res.json()
  return data
}

export async function refreshPackageInfo() {
  revalidateTag('package_versions')
}

export async function getAuthedGroup() {
  let authed_group = process.env.AUTH_GROUP
  return authed_group
}

export async function updatePackage(info: PackageUpdate) {
  const url = `${process.env.OBSENV_API}/update_package`
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

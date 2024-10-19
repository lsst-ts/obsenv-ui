'use server'

import { revalidateTag } from 'next/cache'
import { PackageUpdate } from '@/app/lib/definitions'
import { redirect } from 'next/navigation'

const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay))

export async function getPackages() {
  const url = `${process.env.OBSENV_API}/package_versions`
  console.log(url)
  const res = await fetch(url, { cache: 'no-store' })
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

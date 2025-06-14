'use server'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { PackageUpdate } from '@/app/lib/definitions'

const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay))

export async function refreshPackageInfo() {
  revalidateTag('package_versions')
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

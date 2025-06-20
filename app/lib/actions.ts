'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

export async function getAuthedGroup() {
  let authedGroup = process.env.AUTH_GROUP
  return authedGroup
}

export async function getApiUrl() {
  let apiUrl = process.env.OBSENV_API
  return apiUrl
}

export async function refreshPackageInfo() {
  revalidatePath('/dashboard')
  // revalidateTag('package_versions')
}

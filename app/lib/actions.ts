'use server'

import { revalidatePath } from 'next/cache'

export async function refreshPackageInfo() {
  revalidatePath('dashboard')
}

export async function getAuthedGroup() {
  let authed_group = process.env.AUTH_GROUP
  return authed_group
}

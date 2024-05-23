'use server'

import { revalidatePath } from 'next/cache'

export async function refreshPackageInfo() {
    revalidatePath('dashboard');
}
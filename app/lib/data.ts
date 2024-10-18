'use server'

const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay))

export async function getPackages() {
  const url = `${process.env.OBSENV_API}/package_versions`
  console.log(url)
  const res = await fetch(url, { next: { tags: ['package_versions'] } })
  if (!res.ok) {
    throw new Error('Unable to fetch package data.')
  }
  const data = await res.json()
  return data
}

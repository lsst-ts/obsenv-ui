"use server"

const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))

export async function getPackages() {
    const url = `${process.env.NEXT_PUBLIC_OBSENV_API}/package_versions`;
    console.log(url);
    // console.log("Sleep")
    // await sleep(10000);
    // const res = await fetch(url, {
    //     cache: "force-cache",
    //     next: { tags: ["packages"] }
    // });
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) {
        throw new Error("Unable to fetch package data.")
    }
    const data = await res.json();
    console.log(data)
    return data;
}

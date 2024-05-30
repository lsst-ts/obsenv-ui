'use server'

import { revalidatePath } from 'next/cache'
import { devAuthedUserData, devUnauthedUserData } from './dev-data';
import { UserData } from './definitions';

export async function refreshPackageInfo() {
    revalidatePath('dashboard');
}

export async function showProcEnv() {
    console.log(process.env)
}

export async function getSetup() {
    let appEnv = `${process.env.APP_ENV}`
    return {
        appEnv
    }
}

export async function getUserData(): Promise<UserData> {
    var data: UserData
    let devEnv = process.env?.APP_ENV === undefined ? false : true
    if (devEnv) {
        let userType = `${process.env.USER_TYPE}`
        if (userType === "AUTHED") {
          data = {...devAuthedUserData(), loggedIn: true}
        } else {
          data = {...devUnauthedUserData(), loggedIn: true}
        }

    } else {
        let baseUrl = process.env.BASE_URL
        if (baseUrl === undefined) {
            throw Error("Base URL must be provided to application!")
        }
        data = {...devUnauthedUserData()}
    }
    return new Promise<UserData>((resolve, reject) => {
        resolve(data), reject("")
    })
}
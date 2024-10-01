// User Info endpoint testing

import { UserData } from '@/app/lib/definitions'
import { devAuthedUserData, devUnauthedUserData } from '@/app/lib/dev-data'

export async function GET() {
  let userType = process.env.NEXT_PUBLIC_USER_TYPE
  var info: UserData
  if (userType === 'AUTHED' || userType === undefined) {
    info = devAuthedUserData()
  } else if (userType === 'NON-AUTHED') {
    info = devUnauthedUserData()
  } else {
    throw Error(`Don't know user type ${userType}`)
  }
  let headers = new Headers({
    'Content-Type': 'application/json',
  })
  let options = { status: 200, headers: headers }
  return Response.json(info, options)
}

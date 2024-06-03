import { devAuthedUserData, devUnauthedUserData } from '@/app/lib/dev-data'

export const dynamic = 'force-dynamic'

export async function GET() {
  let userType = `${process.env.USER_TYPE}`
  var data = null
  if (userType === 'AUTHED') {
    data = { ...devAuthedUserData(), ...{ loggedIn: true } }
  } else {
    data = { ...devUnauthedUserData(), ...{ loggedIn: true } }
  }
  return new Response(data.toString(), {
    status: 200,
    statusText: 'Login successful',
  })
}

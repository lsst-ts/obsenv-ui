export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  return new Response(null, {status: 200, statusText: "Logout complete"})
}
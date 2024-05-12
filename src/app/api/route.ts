export async function GET() {
  const res = await fetch('https://swapi.dev/api/'  )
  const data = await res.json()
 console.log(data);
 
  return Response.json({ data: data.films })
}
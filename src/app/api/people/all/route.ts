import { filterData } from '@/hooks/useFilterData';
export async function GET() {
  const accum = Array.from({ length: 82 }, async (_, i) => {
    return await fetch(`https://swapi.dev/api/people/${i + 1}`)
      .then((res) => res.json())
      .then((data) => filterData(data));
  });
  const requests = await Promise.all(accum);
  return Response.json({
    data: requests.filter((character) => !character.detail),
  });
}

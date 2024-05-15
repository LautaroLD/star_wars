export function useFetchPeople() {
  const getAllPeople = async () => {
    const data = await fetch('/api/people/all')
      .then((response) => response.json())
      .then(({ data }) => data);

    return data;
  };
  return { getAllPeople };
}

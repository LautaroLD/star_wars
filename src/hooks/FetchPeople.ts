import { Character } from '@/models';

interface Props {
  next: React.MutableRefObject<string>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<Character[]>>;
}

export function useFetchPeople() {
  const getPeople = async ({ next, setLoading, setData }: Props) => {
    try {
      const res = await fetch(`/api/people?next=${next.current}`);
      const dataApi = await res.json();
      next.current = dataApi.next;
      setData((prevState) => [...prevState, ...dataApi.data]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return { getPeople };
}

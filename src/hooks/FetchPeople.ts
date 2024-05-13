import { Character } from '@/models';

interface Props {
  next: React.MutableRefObject<string>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<Character[]>>;
}
export function FetchPeople({ next, setLoading, setData }: Props) {
  fetch('/api/people?next=' + next.current)
    .then((response) => response.json())
    .then((dataApi) => {
      next.current = dataApi.next;
      setData((prevState) => {
        return [...prevState, ...dataApi.data];
      });
      setLoading(false);
    });
}

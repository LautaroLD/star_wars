import { Character } from '@/models';
const getIdFromUrl = (url: string): string => {
  const parts = url.split('/');
  parts.pop();
  return parts.pop() ?? '';
};
export const filterData = (data: Character): Partial<Character> => {
  let dataFiltered: Partial<Character> = {};
  for (const key in data) {
    if (data[key] !== 'n/a' && data[key] !== 'unknown') {
      dataFiltered[key] = data[key];
    }
  }
  dataFiltered.id = data.url && getIdFromUrl(data.url);

  return dataFiltered;
};

export function useGetIdFromUrl() {
  const getIdFromUrl = (url: string): string => {
    const parts = url.split('/');
    parts.pop();
    return parts.pop() ?? '';
  };
  return { getIdFromUrl };
}

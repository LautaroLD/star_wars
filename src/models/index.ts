export interface Film {
  title: string;
  episode_id: number;
  director: string;
  characters_id: string[];
  url: string;
  id: string;
}
export interface Character {
  name: string;
  gender: string;
  eye_color: string;
  birth_year: string;
  hair_color: string;
  height: string;
  skin_color: string;
  mass: string;
  url: string;
  id: string;
}
export type ChildrenProps = Readonly<{
  children: React.ReactNode;
}>;

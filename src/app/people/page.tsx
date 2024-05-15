'use client';
import CharactersList from '@/components/CharactersList';
import Loading from '@/components/shared/Loading';
import { Character } from '@/models';
import { useEffect, useState } from 'react';
export default function PeoplePage() {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [eyesColor, setEyesColor] = useState<string[]>([]);
  const [colorSelected, setColorSelected] = useState<string>('');
  const [genderSelected, setGenderSelected] = useState<string>('');
  useEffect(() => {
    fetch('/api/people/all')
      .then((response) => response.json())
      .then(({ data }) => {
        setData(data);
        data.map((character: Character) => {
          setEyesColor((prevState) => {
            if (
              !prevState.includes(character.eye_color) &&
              character.eye_color
            ) {
              return [...prevState, character.eye_color];
            } else {
              return prevState;
            }
          });
        });
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <section>
            <label>
              <h2>Filter by eyes color</h2>
              <select
                className=' m-4 bg-transparent border outline-none rounded-md px-3 py-1'
                defaultValue={0}
                onChange={(e) => setColorSelected(e.target.value)}
              >
                <option className='text-black' value={''}>
                  all
                </option>
                {eyesColor.map((color) => (
                  <option className='text-black' key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <h2>Filter by gender</h2>
              <select
                className=' m-4 bg-transparent border outline-none rounded-md px-3 py-1'
                defaultValue={0}
                onChange={(e) => setGenderSelected(e.target.value)}
              >
                <option className='text-black' value=''>
                  all
                </option>
                <option className='text-black' value='male'>
                  male
                </option>
                <option className='text-black' value='female'>
                  female
                </option>
                <option className='text-black' value='hermaphrodite'>
                  hermaphrodite
                </option>
                <option className='text-black' value='none'>
                  none
                </option>
              </select>
            </label>
          </section>
          <CharactersList
            list={data.filter((character) => {
              if (colorSelected.length && genderSelected.length) {
                return (
                  character.eye_color === colorSelected &&
                  character.gender === genderSelected
                );
              } else if (colorSelected.length) {
                return character.eye_color === colorSelected;
              } else if (genderSelected.length) {
                return character.gender === genderSelected;
              } else {
                return true;
              }
            })}
          />
        </>
      )}
    </>
  );
}

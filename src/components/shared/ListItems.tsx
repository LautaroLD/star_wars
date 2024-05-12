import React from 'react';

export const ListItems = async ({ url }) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
  return <div>ListItems</div>;
};

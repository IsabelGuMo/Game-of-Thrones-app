const GOTURL = "https://api.got.show/api/show/characters/";

export const getCharacters = () => {
  return fetch(GOTURL).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return [];
    }
  });
};

export const getCharacterById = (name) => {
  return fetch(`https://api.got.show/api/show/characters/${name}`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return [];
    }
  });
};
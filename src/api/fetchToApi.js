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

export const getCharacterId = (id) => {
  return fetch(`${GOTURL}${id}`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return [];
    }
  });
};
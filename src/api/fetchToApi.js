const GOTURLCHARACTERS = "https://api.got.show/api/show/characters/";
const GOTURLHOUSES = "https://api.got.show/api/show/houses/";


//FETCH CHARACTERS
export const getCharacters = () => {
  return fetch(GOTURLCHARACTERS).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return [];
    }
  });
};

export const getCharacterById = (name) => {
  return fetch(`${GOTURLCHARACTERS}${name}`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return [];
    }
  });
};


//FETCH HOUSES
export const getHouses = () => {
  return fetch(GOTURLHOUSES).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return [];
    }
  });
};

export const getHouseByName = (house) => {
  return fetch(`${GOTURLHOUSES}${house}`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return [];
    }
  });
};
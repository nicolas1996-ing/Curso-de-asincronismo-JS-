const { fetchData } = require("../utils/fetchData");
const url = "https://rickandmortyapi.com/api/character/";

const challengeByAsync = async () => {
  try {
    const dataG = await fetchData(url);
    const nameCharacter = await fetchData(`${url}${dataG.results[0].id}`);
    const origin = await fetchData(nameCharacter.origin.url);

    console.log(dataG.info.count);
    console.log(nameCharacter.name);
    console.log(origin.dimension);
  } catch (error) {
    console.log(error);
  }
};

challengeByAsync();
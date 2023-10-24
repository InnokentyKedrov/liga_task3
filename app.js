const main = document.querySelector(".main");
const URI = "https://swapi.dev/api/people/?page=1";

const starWars1 = async () => {
  await fetch(URI).then(() => console.log("starWars1 - promise"));
  changeStyle();
};

const changeStyle = () => {
  console.log("starWars1 - changeStyle");
  main.style.display = "flex";
  main.style.justifyContent = "center";
  main.style.background = "gray";
};

const starWars2 = async () => {
  await fetch(URI)
    .then(() => console.log("starWars2 - promise 1"))
    .then(() => console.log("starWars2 - promise 2"));
};

const starWars3 = async () => {
  const responce = await fetch(URI)
    .then((data) => data.json())
    .then((data) => {
      return data.results[0];
    });
  console.log("starWars3 - promise");
  renderCharacters(responce);
};

const renderCharacters = (hero) => {
  console.log("starWars3 - renderCharacters");
  main.innerHTML = `
    <div class="hero">
    <h1 class="hero__title">${hero.name}</h1>
    <ul class="hero__list">
    <li class="hero__item">Birth year: ${hero.birth_year}</li>
    <li class="hero__item">Height: ${hero.height}</li>
    <li class="hero__item">Gender: ${hero.gender}</li>
    <li class="hero__item">Mass: ${hero.mass}</li>
    </ul>
    </div>`;
};

const starWars = () => {
  starWars1();
  starWars2();
  starWars3();
};

starWars();

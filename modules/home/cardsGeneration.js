
function CardsGeneration() {
  const projectSection = document.getElementById('winners');

  const content = [
    {
      name: "TYSON 'TENZ'",
      team: 'Team Sentinel ',
      description: "Is a Canadian player who currently plays for Sentinels. He is a retired professional Counter-Strike: Global Offensive player.",
      imageURL: './assets/images/sen-tenz.jpg',
    },
    {
      name: "TYSON 'TENZ'",
      team: 'Team Sentinel ',
      description: "Is a Canadian player who currently plays for Sentinels. He is a retired professional Counter-Strike: Global Offensive player.",
      imageURL: './assets/images/sen-tenz.jpg',
    },
  ];

  const createElement = (elementType = '', elementContent, elementClass = '', elementId = '') => {
    const newElement = document.createElement(elementType);
    newElement.innerHTML = elementContent;
    if (elementClass) newElement.className = elementClass;
    if (elementId) newElement.id = elementId;
    return newElement;
  };

  const sectionTitle = createElement('h1', 'Winners of the last Master');
  const divider = createElement('div', '', 'divider');
  const card = [];
  const cardContainer = createElement('ul', '');

  const renderCardContent = () => {
    content.forEach((cardContent, i) => {
      const {
        name, team, description, imageURL
      } = cardContent;

      card.push(
        `<li>
          <img src="${imageURL}" alt="${name}">
          <div>
            <h2>${name}</h2>
            <p>${team}</p>
            <p class="description">${description}</p>
          </div>
        </li>`
      );

      let htmlChild = card[i];
      cardContainer.innerHTML += htmlChild;
    });
  };

  renderCardContent();

  projectSection.append(
    sectionTitle,
    divider,
    cardContainer,
  );
}

export default CardsGeneration;
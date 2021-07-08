function CardsGeneration() {
  const projectSection = document.getElementById('winners');

  const content = [
    {
      name: "TYSON 'TENZ'",
      team: 'Team Sentinel ',
      description: 'Is a Canadian player who currently plays for Sentinels. He is a retired professional Counter-Strike: Global Offensive player.',
      imageURL: './assets/images/sen-tenz.jpg',
    },
    {
      name: 'SHAHZEB “SHAHZAM”',
      team: 'Team Sentinel ',
      description: 'Is an American Valorant player who currently plays for the Sentinels. was previously a professional Counter-Strike: Global Offensive .',
      imageURL: './assets/images/shazam.jpg',
    },
    {
      name: 'JARED “ZOMBS”',
      team: 'Team Sentinel ',
      description: 'Is an American Valorant player who currently plays for the Sentinels. was previously a professional Counter-Strike: Global Offensive .',
      imageURL: './assets/images/sick.jpg',
    },
    {
      name: 'HUNTER “SICK” ',
      team: 'Team Sentinel ',
      description: 'Is an American Valorant player who currently plays for the Sentinels. was previously a professional Counter-Strike: Global Offensive .',
      imageURL: './assets/images/zomb.jpg',
    },
    {
      name: 'MICHAEL “DAPR”',
      team: 'Team Sentinel ',
      description: 'Is an American Valorant player who currently plays for the Sentinels. was previously a professional Counter-Strike: Global Offensive .',
      imageURL: './assets/images/dapr.jpg',
    },
    {
      name: 'ROB MOORE ',
      team: 'Team Sentinel CEO',
      description: 'Is an American bussiness man owner of the sentinel team',
      imageURL: './assets/images/rob.jpg',
    },
  ];

  const createElement = (elementType = '', elementContent, elementClass = '', elementId = '') => {
    const newElement = document.createElement(elementType);
    newElement.innerHTML = elementContent;
    if (elementClass) newElement.className = elementClass;
    if (elementId) newElement.id = elementId;
    return newElement;
  };

  const sectionTitle = createElement('h2', 'Winners of the last Master');
  const divider = createElement('div', '', 'divider');
  const card = [];
  const cardContainer = createElement('ul', '');

  const renderCardContent = () => {
    content.forEach((cardContent, i) => {
      const {
        name, team, description, imageURL,
      } = cardContent;

      card.push(
        `<li>
          <img src="${imageURL}" alt="${name}">
          <div>
            <h3>${name}</h3>
            <p>${team}</p>
            <p class="description">${description}</p>
          </div>
        </li>`,
      );

      const htmlChild = card[i];
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
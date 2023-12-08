let placesData;
let tagsData;

async function getPlacesData() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/knot-freshket/142c21c3e8e54ef36e33f5dc6cf54077/raw/94ebab16839484f06d42eb799e30d0a945ff1a1b/freshket-places.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    placesData = data;
    return data;
  } catch (error) {
    console.error('There was a problem fetching the data:', error);
  }
}

async function getTagsData() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/knot-freshket/fa49e0a5c6100d50db781f28486324d2/raw/55bc966f54423dc73384b860a305e1b67e0bfd7d/freshket-tags.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    tagsData = data;
  } catch (error) {
    console.error('There was a problem fetching the data:', error);
  }
}

function genPage() {
  const cardContainer = document.getElementById("card-container");
  
  function getTagNames(tagIds) {
    return tagIds.map(tagId => {
      const foundTag = tagsData.find(tag => tag.id === tagId);
      return foundTag ? foundTag.name : 'Tag Not Found';
    });
  }

  function createCard(cardData) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const container = document.createElement("div");
    container.classList.add("container");

    const image = document.createElement("img");
    image.src = cardData.img_url;
    container.appendChild(image);

    const div = document.createElement("div");
    div.classList.add("clear");
    div.textContent = '.';
    container.appendChild(div);

    const title = document.createElement("h3");
    title.classList.add("card-name");
    title.textContent = cardData.name;
    container.appendChild(title);
    
    card.appendChild(container);
    
  
    const body = document.createElement("p");
    body.classList.add("content");
    body.textContent = cardData.body;
    card.appendChild(body);
    let tagNames = '';
    if (cardData.tags && Array.isArray(cardData.tags)) {
      tagNames = getTagNames(cardData.tags);
      for (tag of tagNames) {
        const tags = document.createElement("p");
        tags.classList.add("tags");
        tags.textContent = tag;
        card.appendChild(tags);
      }
      
    }

    cardContainer.appendChild(card);
  }
  
  placesData.forEach((data) => {
    createCard(data);
  });
}

async function main(){
  await getPlacesData();
  await getTagsData();
  genPage();
}

main();
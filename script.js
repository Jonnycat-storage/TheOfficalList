document.getElementById("search-input").addEventListener("keydown", function () {
    const searchValue = document.getElementById("search-input").value;
    const resultsContainer = document.getElementById("result");

    while (resultsContainer.firstChild) {


        resultsContainer.removeChild(resultsContainer.firstChild);

    }
    var breake = document.createElement('br')
    var breake2 = document.createElement('br')
    var breake3 = document.createElement('br')
    var breake4 = document.createElement('br')

    
    resultsContainer.appendChild(breake)
    resultsContainer.appendChild(breake2)
    resultsContainer.appendChild(breake3)
    resultsContainer.appendChild(breake4)
    fetch("lightspeed.txt")
  .then((response) => response.text())
  .then((data) => {
    const links = data.split("\n");
    const resultsContainer = document.getElementById("result");

    for (const link of links) {
      const [name, url] = link.split(" ");
      if (name.toLowerCase().includes(searchValue.toLowerCase())) {

        const linkElement = document.createElement("a");
        linkElement.href = url;
        linkElement.target = "_blank";
        linkElement.rel = "noopener,noreferrer";

        const listItem = document.createElement("div");
        listItem.classList.add('ITEMCLASS')
      
        const textstuff = document.createElement('h1')
        textstuff.textContent = name;
        textstuff.classList.add('fixedtxt')




        listItem.appendChild(textstuff)



       


        linkElement.appendChild(listItem);

        resultsContainer.appendChild(linkElement);
      }
    }

    if (resultsContainer.children.length === 0) {
      resultsContainer.textContent = "No matching links found.";
    }
  })
  .catch((error) => {
    console.error("Error fetching links:", error);
  });

});

const searchValue = document.getElementById("search-input").value;

    fetch("lightspeed.txt")
  .then((response) => response.text())
  .then((data) => {
    const links = data.split("\n");
    const resultsContainer = document.getElementById("result");

    for (const link of links) {
      const [name, url] = link.split(" ");
      if (name.toLowerCase().includes(searchValue.toLowerCase())) {

        const linkElement = document.createElement("a");
        linkElement.href = url;
        linkElement.target = "_blank";
        linkElement.rel = "noopener,noreferrer";

        const listItem = document.createElement("div");
        listItem.classList.add('ITEMCLASS')
      
        const textstuff = document.createElement('h1')
        textstuff.textContent = name;
        textstuff.classList.add('fixedtxt')




        listItem.appendChild(textstuff)



       


        linkElement.appendChild(listItem);

        resultsContainer.appendChild(linkElement);
      }
    }

    if (resultsContainer.children.length === 0) {
      resultsContainer.textContent = "No matching links found.";
    }
  })
  .catch((error) => {
    console.error("Error fetching links:", error);
  });

  console.warn('Executed Code With Help From Thatblockboi')

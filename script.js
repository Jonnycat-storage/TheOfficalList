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
    fetch("thelist.txt")
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

    fetch("thelist.txt")
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

        const logostuff = document.createElement('img')
        
        logostuff.classList.add('logo')

        if(name.includes('rammerhead')) {
          logostuff.src = './logos/rammerhead.png'
          
        } else if(name.includes('doge')) {
          logostuff.src = './logos/doge.jpg'
          
        } else if(name.includes('hypertabs')) {
          logostuff.src = './logos/hyper.png'
          
        } else if(name.includes('snorlaxs')) {
          logostuff.src = './logos/snorlax.png'
          
        } else if(name.includes('incognito')) {
          logostuff.src = './logos/incognito.png'
          
        } else if(name.includes('phantomgames')) {
          logostuff.src = './logos/phantomgames.png' 

        } else if(name.includes('SN')) {
            logostuff.src = './logos/SN.png' 

        } else if(name.includes('interstellar')) {
            logostuff.src = './logos/IN.png'  

        } else if(name.includes('emerald')) {
            logostuff.src = './logos/emerald.png' 

        } else if(name.includes('nebula')) {
            logostuff.src = './logos/nebula.png' 
            
        } else if(name.includes('Cobalt')) {
            logostuff.src = './logos/cobalt.svg'

        } else if(name.includes('foil')) {
            logostuff.src = './logos/foil.png' 
            
        } else if(name.includes('kitty')) {
            logostuff.src = './logos/kitty.png' 

        } else if(name.includes('lunar')) {
            logostuff.src = './logos/lunar.png' 
            
        } else {
          logostuff.src = './logos/jonny.png'
          
        }          
  
        listItem.appendChild(logostuff)


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

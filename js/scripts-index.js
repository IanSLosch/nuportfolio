
const banBallot = document.querySelector("#banBallot")
const unbanBallot = document.querySelector("#unbanBallot")

const libraryMaster = [
  {displayName: "Thassa's Oracle", image: "/image/oraclefull.jpg", isBanned: false, id: "ThassasOracle"},
  {displayName: "Underworld Breach", image: "/image/breachart.jpg", isBanned: false, id: "UnderworldBreach"},
  {displayName: "Dockside Extortionist", image: "/image/docksideart.jpg", isBanned: false, id: "DocksideExtortionist"},
  {displayName: "Iona, Shield of Emeria", image: "/image/ionaart.jpg", isBanned: true, id: "IonaShieldofEmeria"},
  {displayName: "Primeval Titan", image: "/image/primevalart.jpg", isBanned: true, id: "PrimevalTitan"},
  {displayName: "Sway of the Stars", image: "/image/swayart.jpg", isBanned: true, id: "SwayoftheStars"}
];

function createVotingCard(obj) {

  const divElem = document.createElement('div')
  divElem.classList.add('col-10', 'col-sm-6', 'col-md-4', 'my-3')
  const cardElem = document.createElement('div')
  cardElem.classList.add('card')
  divElem.appendChild(cardElem)
  cardElem.innerHTML = `
          <img src=${obj.image} class="card-img-top" alt=${obj.displayName}>
          <div class="card-body">
            <h5 class="card-title">${obj.displayName}</h5>
            <div class="form-outline">
              <input class="form-control my-2" type="search" id="search-${obj.id}"  placeholder="Search..."/>
              <div class="search-results" id="search-results-${obj.id}"></div>
            </div>
            <div class="text-center mt-2">
              <a href="#" class="btn btn-primary" id="submitNom${obj.id}">Submit</a>
            </div>
          </div>
  `

  if (obj.isBanned === true) {
    unbanBallot.appendChild(divElem)
  }
  if (obj.isBanned === false) {
    banBallot.appendChild(divElem)
  }
  const searchInput = document.getElementById(`search-${obj.id}`)
  const searchResults = document.getElementById(`search-results-${obj.id}`)

  searchInput.addEventListener('input', function(event) {
    filterSearchResults(event, searchResults)
  })
}

function filterSearchResults(event, searchResults) {
  const query = event.target.value.toLowerCase()
  const matches = libraryMaster.filter(card => {
    const name = card.displayName.toLowerCase()
    return name.includes(query)
  })
  displayResults(matches, searchResults)
}

function displayResults(matches, searchResults) {
  const htmlToBeInjected = matches.map(function(match) {
    return `
      <div class="card mb-3">
        <div class="card-body">
          <h5>${match.displayName}</h5>
        </div>
      </div>
    `
  }).join('')
  console.log(searchResults)
  searchResults.innerHTML = htmlToBeInjected
}

for (let obj in libraryMaster) {
    createVotingCard(libraryMaster[obj])
}




const banBallot = document.querySelector("#banBallot")
const unbanBallot = document.querySelector("#unbanBallot")

const banDict = {
    "Thassa's Oracle": {name: "Thassa's Oracle", image: "/image/oraclefull.jpg"},
    "Underworld Breach": {name: "Underworld Breach", image: "/image/breachart.jpg"},
    "Dockside Extortionist": {name: "Dockside Extortionist", image: "/image/docksideart.jpg"}
}
const unbanDict = {
    "Iona, Shield of Emeria": {name: "Iona, Shield of Emeria", image: "/image/ionaart.jpg"},
    "Primeval Titan": {name: "Primeval Titan", image: "/image/primevalart.jpg"},
    "Sway of the Stars": {name: "Sway of the Stars", image: "/image/swayart.jpg"}
}

function createBanCard(cardName) {
    banBallot.innerHTML += `
    <div class="col-10 col-sm-6 col-md-4 my-2">
        <div class="card">
          <img src=${cardName.image} class="card-img-top" alt=${cardName.name}>
          <div class="card-body">
            <h5 class="card-title">${cardName.name}</h5>
            <div class="input-group rounded">
              <input type="search" class="form-control rounded" placeholder="Search" />
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </div>
            <div class="text-center mt-2">
              <a href="#" class="btn btn-primary" id="submitNom${cardName.name}">Submit</a>
            </div>
          </div>
        </div>
      </div>
`
}

function createUnbanCard(cardName) {
    unbanBallot.innerHTML += `
    <div class="col-10 col-sm-6 col-md-4 my-2">
        <div class="card">
          <img src=${cardName.image} class="card-img-top" alt=${cardName.name}>
          <div class="card-body">
            <h5 class="card-title">${cardName.name}</h5>
            <div class="input-group rounded">
              <input type="search" class="form-control rounded" placeholder="Search" />
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </div>
            <div class="text-center mt-2">
              <a href="#" class="btn btn-primary" id="submitNom${cardName.name}">Submit</a>
            </div>
          </div>
        </div>
      </div>
`
}

for (let cardName in banDict) {
    createBanCard(banDict[cardName])
}
for (let cardName in unbanDict) {
    createUnbanCard(unbanDict[cardName])
}

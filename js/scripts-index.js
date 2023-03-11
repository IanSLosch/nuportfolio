const banBallot = document.querySelector("#banBallot")
const unbanBallot = document.querySelector("#unbanBallot")

const libraryMaster = [
  { displayName: "Thassa's Oracle", image: "/image/oraclefull.jpg", isBanned: false, id: "ThassasOracle" },
  { displayName: "Underworld Breach", image: "/image/breachart.jpg", isBanned: false, id: "UnderworldBreach" },
  { displayName: "Dockside Extortionist", image: "/image/docksideart.jpg", isBanned: false, id: "DocksideExtortionist" },
  { displayName: "Iona, Shield of Emeria", image: "/image/ionaart.jpg", isBanned: true, id: "IonaShieldofEmeria" },
  { displayName: "Primeval Titan", image: "/image/primevalart.jpg", isBanned: true, id: "PrimevalTitan" },
  { displayName: "Sway of the Stars", image: "/image/swayart.jpg", isBanned: true, id: "SwayoftheStars" }
]

const currentDisplay = [
  {image: "/image/empty-ballot.png", displayName: "Name", isBanned: false},
  {image: "/image/empty-ballot.png", displayName: "Name", isBanned: false},
  {image: "/image/empty-ballot.png", displayName: "Name", isBanned: false},
  {image: "/image/empty-ballot.png", displayName: "Name", isBanned: true},
  {image: "/image/empty-ballot.png", displayName: "Name", isBanned: true},
  {image: "/image/empty-ballot.png", displayName: "Name", isBanned: true}
]
const defaultImage = "/image/empty-ballot.png"

function createVotingCards(id) {
  const divElem = document.createElement('div')
  divElem.classList.add('col-10', 'col-sm-6', 'col-md-4', 'my-3')
  const cardElem = document.createElement('div')
  cardElem.classList.add(`card`)
  cardElem.setAttribute('id', `${id}`)
  divElem.appendChild(cardElem)
  cardElem.innerHTML = `
          <img id="image-${id}" src=${currentDisplay[id].image} class="card-img-top" alt="">
          <div" class="card-body">
            <h5 id="display-name-${id}"class="card-title">${currentDisplay.displayName}</h5>
          </div>
  `
  if (id < 3) {
    banBallot.appendChild(divElem)
  }
  if (id >= 3) {
    unbanBallot.appendChild(divElem)
  }
}

for (let i = 0; i < 6; i++) {

  createVotingCards(i)
}



banSearch.addEventListener('input', (e) => filterUserInput(e, 'ban'))
unbanSearch.addEventListener('input', (e) => filterUserInput(e, 'unban'))

function filterUserInput(event, banOrUnban) {

  const inputBox = banOrUnban === 'ban' ? banSearch : unbanSearch
  const searchResultsElem = banOrUnban === 'ban' ? banResults : unbanResults
  const searchBox = banOrUnban === 'ban' ? banBox : unbanBox
  let searchText = event.target.value
  let searchResults = []

  if (searchText) {
    inputBox.addEventListener('keypress', (e) => {
      if(e.keyCode === 13) {
        console.log(`No result for ${searchText}`)
      }
    })

    searchResults = libraryMaster.filter((libraryData) => {
      const query = searchText.toLowerCase()
      const displayName = libraryData.displayName.toLowerCase()
      return displayName.includes(query)
    })

    searchResults = searchResults.map(data => {
      return `<li id=${data.id}>${data.displayName}</li>`
    })

    searchBox.classList.add("active")
    showSuggestions(searchResults, inputBox, searchResultsElem)

    let searchResultsList = searchResultsElem.querySelectorAll("li")
    for (let i = 0; i < searchResultsList.length; i++) {
      searchResultsList[i].addEventListener("click", () => addImageAndTitle(searchResultsList[i], inputBox))
      }
    } else {
    searchBox.classList.remove("active")
  }

  displayResults(searchText, searchResultsElem)
}

function showSuggestions(searchResults, inputBox, searchResultsElem) {
  let listData
  if(!searchResults.length) {
    const userValue = inputBox.value
    listData = `<li>${userValue}</li>`
  } else {
    listData = searchResults.join('')
  }
  searchResultsElem.innerHTML = listData
}

function displayResults(searchText, searchResultsElem) {
  if (!searchText.length) {
    searchResultsElem.classList.add("d-none")
  } else {
    searchResultsElem.classList.remove("d-none")
  }
}

function addImageAndTitle(listItem, inputBox){
  const selection = libraryMaster.find(card => card.id === `${listItem.id}`)
  console.log(selection)
  console.log(inputBox)
  // for (cardsDisplayed in currentDisplay) {
  //   if (cardsDisplayed.includes(selection.displayName)) {
  //     return false
  //   }
  // }
  for (let i = 0; i < currentDisplay.length; i++) {
    if (currentDisplay.displayName === selection.displayName) {
      break
    }
    if (currentDisplay[i].image === defaultImage && currentDisplay[i].isBanned === selection.isBanned) {
      currentDisplay[i].image = selection.image
      currentDisplay[i].displayName = selection.displayName
      console.log(currentDisplay[i].image)

      const imageEle = document.getElementById(`image-${i}`)
      const titleEle = document.getElementById(`display-name-${i}`)
      console.log(imageEle)
      console.log(titleEle)
      console.log(currentDisplay)
      imageEle.src = selection.image
      titleEle.textContent = selection.displayName
      break
    }
  }
}

// function duplicateCheck(selection) {
//   if (currentDisplay.find(card => card.displayName)) {
//     break
//   }
// }

// class displaySelector {
//   constructor(displayName, image, placement) {
//     this.displayName = displayName
//     this.image = image
//     this.placement = placement.isBanned ? banBallot : unbanBallot
//   }
// }


// function select(element){
//   const id = element.id

//   let selectData = element.textContent
//   inputBox.value = selectData
//   console.log(`${selectData} has been selected`)
//   searchWrapper.classList.remove("active")
// }


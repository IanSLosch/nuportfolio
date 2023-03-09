const banBallot = document.querySelector("#banBallot")
const unbanBallot = document.querySelector("#unbanBallot")

const libraryMaster = [
  { displayName: "Thassa's Oracle", image: "/image/oraclefull.jpg", isBanned: false, id: "ThassasOracle" },
  { displayName: "Underworld Breach", image: "/image/breachart.jpg", isBanned: false, id: "UnderworldBreach" },
  { displayName: "Dockside Extortionist", image: "/image/docksideart.jpg", isBanned: false, id: "DocksideExtortionist" },
  { displayName: "Iona, Shield of Emeria", image: "/image/ionaart.jpg", isBanned: true, id: "IonaShieldofEmeria" },
  { displayName: "Primeval Titan", image: "/image/primevalart.jpg", isBanned: true, id: "PrimevalTitan" },
  { displayName: "Sway of the Stars", image: "/image/swayart.jpg", isBanned: true, id: "SwayoftheStars" }
];

function createVotingCards(id) {
  const divElem = document.createElement('div')
  divElem.classList.add('col-10', 'col-sm-6', 'col-md-4', 'my-3')
  const cardElem = document.createElement('div')
  cardElem.classList.add('card')
  divElem.appendChild(cardElem)
  cardElem.innerHTML = `
          <img src="/image/empty-ballot.png" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">${id}</h5>
            <div class="form-outline">
              <div class="wrapper">
                <div class="search-input" id="searchWrapper-${id}">
                  <a href="" target="_blank" hidden></a>
                  <input class="form-control my-2" id="inputBox-${id}" type="text" placeholder="Search..."/>
                  <div class="search-results" id="suggestionBox-${id}"></div>
                </div>
                <div>
                  <input class="form-control my-2 " id="submit-${id}" type="submit" value="Submit" disabled/>
                </div>
              </div>
            </div>
          </div>
  `
  if (id < 3) {
    banBallot.appendChild(divElem)
  }
  if (id >= 3) {
    unbanBallot.appendChild(divElem)
  }
  const searchWrapper = document.getElementById(`searchWrapper-${id}`)
  const inputBox = document.getElementById(`inputBox-${id}`)
  const suggestionBox = document.getElementById(`suggestionBox-${id}`)

  inputBox.addEventListener('keyup', filterUserInput)
  function filterUserInput(event) {
    let searchText = event.target.value
    let searchResults = []
    if (searchText) {
      inputBox.addEventListener('keypress', submitSearchText) 
      function submitSearchText(e) {
        if(e.keycode === 13) {
          console.log("Submit Search Worked")
        }
      }
      searchResults = libraryMaster.filter((libraryData) => {
        const query = searchText.toLowerCase()
        const name = libraryData.displayName.toLowerCase()
        return name.includes(query)
      })
      searchResults = searchResults.map(data => {
        return data = `<li>${data}</li>`
      })
      searchWrapper.classList.add("active")
      showSuggestions(searchResults)
      let allList = suggestionBox.querySelectorAll("li")
      for (let i = 0; i < allList.length; i++) {
        //adding the onclick attribute in all li tags
        allList[i].setAttribute("onclick", "select(this)")
        }
      } else {
      searchWrapper.classList.remove("active")
    }
  }
  function select(element){
    let selectData = element.textContent
    inputBox.value = selectData
    icon.onclick = ()=>{
        console.log(`${selectData} has been selected`)
    }
    searchWrapper.classList.remove("active")
  }
  function showSuggestions(list) {
    let listData
    if (!list.length) {
      userValue = inputBox.value
      listData = `<li>${userValue}</li>`
    } else {
      listData = list.join('')
    }
    suggestionBox.innerHTML = listData
  }
}

  for (let i = 0; i < 6; i++) {
    createVotingCards(i)
  }
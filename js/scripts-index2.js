/*    Home/Index Page - phase#2    */

const banBallot = document.querySelector("#banBallot")
const unbanBallot = document.querySelector("#unbanBallot")

const banDict = {
    "Thassa's Oracle": { name: "Thassa's Oracle", image: "/image/oraclefull.jpg", banList: false},
    "Underworld Breach": { name: "Underworld Breach", image: "/image/breachart.jpg", banList: false},
    "Dockside Extortionist": { name: "Dockside Extortionist", image: "/image/docksideart.jpg", banList: false}
}
const unbanDict = {
    "Iona, Shield of Emeria": { name: "Iona, Shield of Emeria", image: "/image/ionaart.jpg", id: "iona", banList: true},
    "Primeval Titan": { name: "Primeval Titan", image: "/image/primevalart.jpg", id: "primeval", banList: true},
    "Sway of the Stars": { name: "Sway of the Stars", image: "/image/swayart.jpg", id: "stars", banList: true}
}

function createBanCard(cardName) {
    const cardElem = document.createElement('div')
    cardElem.classList.add('card', 'my-4')
    cardElem.innerHTML = `
        <img src=${cardName.image} class="card-img-top" alt="${cardName.name}">
        <div class="card-body">
            <h5 class="card-title">${cardName.name}</h5>
            <div class="container">
            <div class="btn-group d-flex overflow-hidden" role="group">
                <button class="btn btn-secondary w-100 overflow-hidden" id="yesBan${cardName.name}P2">Ban</button>
                <button class="btn btn-secondary w-100 overflow-hidden" id="noBan${cardName.name}P2">Unban</button>
            </div>
            <button class="btn btn-secondary w-50 overflow-hidden" id="submitBan${cardName.name}P2" disabled>Submit</button>
            </div>
        </div>
    `

    banBallot.appendChild(cardElem)

    const yes = document.getElementById(`yesBan${cardName.name}P2`)
    const no = document.getElementById(`noBan${cardName.name}P2`)
    const submit = document.getElementById(`submitBan${cardName.name}P2`)

    yes.addEventListener("click", clickYes)
    no.addEventListener("click", clickNo)
    submit.addEventListener("click", clickSubmit)

    function clickYes() {
        this.classList.remove("btn-secondary")
        this.classList.add("btn-primary")
        no.classList.remove("btn-danger")
        no.classList.add("btn-secondary")
        submit.disabled = false
    }

    function clickNo() {
        this.classList.remove("btn-secondary")
        this.classList.add("btn-danger")
        yes.classList.remove("btn-primary")
        yes.classList.add("btn-secondary")
        submit.disabled = false
    }

    function clickSubmit() {
        yes.classList.remove("btn-primary")
        yes.classList.add("btn-secondary")
        no.classList.remove("btn-danger")
        no.classList.add("btn-secondary")
        submit.disabled = true
    }
}

function createUnbanCard(card) {
    const cardElem = document.createElement('div')
    cardElem.classList.add('card', 'my-4')
    cardElem.innerHTML = `
        <img src=${card.image} class="card-img-top" alt="${card.name}">
        <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <div class="container">
            <div class="btn-group d-flex overflow-hidden" role="group">
                <button class="btn btn-secondary w-100 overflow-hidden" id="yesUnban${card.id}P2">Ban</button>
                <button class="btn btn-secondary w-100 overflow-hidden" id="noUnban${card.id}P2">Unban</button>
            </div>
            <button class="btn btn-secondary w-50 overflow-hidden" id="submitUnban${card.id}P2" disabled>Submit</button>
            </div>
        </div>
    `
    unbanBallot.appendChild(cardElem)

    const yes = document.getElementById(`yesUnban${card.id}P2`)
    const no = document.getElementById(`noUnban${card.id}P2`)
    const submit = document.getElementById(`submitUnban${card.id}P2`)

    yes.addEventListener("click", clickYes)
    no.addEventListener("click", clickNo)
    submit.addEventListener("click", clickSubmit)

    function clickYes() {
        console.log("clickYes")
        yes.classList.remove("btn-secondary");
        yes.classList.add("btn-primary");
        no.classList.remove("btn-danger");
        no.classList.add("btn-secondary");
        submit.disabled = false;
    }

    function clickNo() {
        console.log("clickNo")
        no.classList.remove("btn-secondary");
        no.classList.add("btn-danger");
        yes.classList.remove("btn-primary");
        yes.classList.add("btn-secondary");
        submit.disabled = false;
    }

    function clickSubmit() {
        console.log("clickSubmit")
        yes.classList.remove("btn-primary");
        yes.classList.add("btn-secondary");
        no.classList.remove("btn-danger");
        no.classList.add("btn-secondary");
        submit.disabled = true;
    }
}

for (let cardName in banDict) {
    createBanCard(banDict[cardName])
}
for (let cardName in unbanDict) {
    createUnbanCard(unbanDict[cardName])
}


/*
class cardDictionary {
    constructor(name) {
        this.displayName = name;
        this.imageURL = `/image/bannedlist/${name.replace(/[\s']/g, '-').replace(/,/g, "")}.jpg`;
        this.id = `card-${name}`;
    }
}
for (let i = 0; i < 6; i++) { }
*/

/*    Banned List Page    */

let commanderBannedList = [
    "Ancestral Recall",
    "Balance",
    "Biorhythm",
    "Black Lotus",
    "Braids, Cabal Minion",
    "Channel",
    "Coalition Victory",
    "Emrakul, the Aeons Torn",
    "Erayo, Soratami Ascendant",
    "Falling Star",
    "Fastbond",
    "Flash",
    "Griselbrand",
    "Iona, Shield of Emeria",
    "Karakas",
    "Leovold, Emissary of Trest",
    "Library of Alexandria",
    "Limited Resources",
    "Lutri, the Spellchaser",
    "Mox Emerald",
    "Mox Jet",
    "Mox Pearl",
    "Mox Ruby",
    "Mox Sapphire",
    "Painter's Servant",
    "Panoptic Mirror",
    "Paradox Engine",
    "Primeval Titan",
    "Prophet of Kruphix",
    "Recurring Nightmare",
    "Rofellos, Llanowar Emissary",
    "Shahrazad",
    "Sundering Titan",
    "Sway of the Stars",
    "Sylvan Primordial",
    "Tinker",
    "Time Vault",
    "Time Walk",
    "Tolarian Academy",
    "Trade Secrets",
    "Upheaval",
    "Yawgmoth's Bargain"
];

const bannedObjectArray = []
const cardDisplay = document.getElementById("cardDisplay")
const bannedList = document.getElementById("bannedList")

class card {
    constructor(name) {
        this.displayName = name;
        this.imageURL = `/image/bannedlist/${name.replace(/[\s']/g, '-').replace(/,/g, "")}.jpg`;
        this.id = `card-${name}`;
    }
}

for (let i = 0; i < commanderBannedList.length; i++) {
    let bannedCardObject = new card(commanderBannedList[i])
    bannedObjectArray.push(bannedCardObject)
    const listItem = document.createElement("li")
    listItem.textContent = bannedCardObject.displayName
    listItem.setAttribute("id", bannedCardObject.imageURL)
    listItem.addEventListener("mouseover", () => changeCard(bannedCardObject))
    bannedList.appendChild(listItem)
}

changeCard = (card) => {
    cardDisplay.setAttribute("src", card.imageURL)
}
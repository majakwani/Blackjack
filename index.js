let cards = []
let hasBlackjack = false
let sum = 0
let isAlive = true
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

let player = {
    name: "Anas",
    chips: 145
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = `${player.name}: $${player.chips}`

function startGame(){
    cards = []
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardEl.textContent = `Cards: `
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ,"
    }
    sumEl.textContent = `Sum: ${sum}`
    if(sum <= 20){
        message = "Do you want to draw another card?"
    }
    
    else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackjack = true
    }
    
    else{
        message = "You are out of the game."
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(!isAlive){
        message = "You cannot draw another card, Play new game."
        messageEl.textContent = message
    }
    else{
    let card = getRandomCard()
    sum = sum + card
    renderGame()
    }
}

function getRandomCard(){
    let randomNumber =  Math.floor(Math.random()*13) + 1
    if (randomNumber === 1){
        cards.push(11)
        return 11
    } 
    else if(randomNumber > 10){
        cards.push(10)
        return 10
    }
    else{
        cards.push(randomNumber)
        return randomNumber
    }
}
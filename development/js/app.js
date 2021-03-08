const pokemons = document.querySelectorAll(".figure");
const btn = document.querySelector(".start");

const gameScore = {
    numberOfGames: 0,
    wins: 0,
    draws: 0,
    losses: 0,
}

const game = {
    playerChoice: "",
    aiChoice: "",
}

let result;

function pokemonSelection() {
    game.playerChoice = this.dataset.option
    console.log(game.playerChoice);
    pokemons.forEach(pokemon => pokemon.style.boxShadow = "");
    if (game.playerChoice === "charmander") {
        this.style.boxShadow = "0 0 0 4px #fe9441"
    } else if (game.playerChoice === "squirtle") {
        this.style.boxShadow = "0 0 0 4px #93c8d0"
    } else {
        this.style.boxShadow = "0 0 0 4px #89C893"
    }
}

function aiSelection() {
    game.aiChoice = Math.floor(Math.random() * 3 + 1)
    if (game.aiChoice === 1) {
        game.aiChoice = "charmander";
    } else if (game.aiChoice === 2) {
        game.aiChoice = "squirtle"
    } else {
        game.aiChoice = "bulbasaur"
    }
    console.log(game.aiChoice);
    return game.aiChoice
}

function playerVsAi(player, ai) {
    if (player === "charmander" && ai === "bulbasaur" || player === "bulbasaur" && ai === "squirtle"
        || player === "squirtle" && ai === "charmander") {
        console.log("wygrałeś!");
    } else if (player === "bulbasaur" && ai === "charmander" || player === "squirtle" && ai === "bulbasaur"
        || player === "charmander" && ai === "squirtle") {
        console.log("przegrałeś!")
        } else {
    console.log("remis!");}
}

function start() {
    if (game.playerChoice === "") {
        return alert("Wybierz pokemona!")
    }
    aiSelection();
    playerVsAi(game.playerChoice, game.aiChoice)
}



btn.addEventListener("click", start);

pokemons.forEach(pokemon => pokemon.addEventListener("click", pokemonSelection));


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


function pokemonSelection() {
    game.playerChoice = this.dataset.option
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
    return game.aiChoice
}

function playerVsAi(player, ai) {
    let result;
    if (player === "charmander" && ai === "bulbasaur" || player === "bulbasaur" && ai === "squirtle"
        || player === "squirtle" && ai === "charmander") {
        result = "Win!";
        return result
    } else if (player === ai) {
        result = "Draw!";
        return result
    } else {
        result = "Loose!";
        return result;
    }

}

function scoreShow(player, ai, result, whoWin) {
    const yourChoice =
        document.querySelector("[data-sumary=your-choice] span").textContent = player.toUpperCase();
    const aiChoice =
        document.querySelector("[data-sumary=ai-choice] span").textContent = ai.toUpperCase();
    const numberGames =
        document.querySelector("[data-sumary=number-games] span").textContent = gameScore.numberOfGames;
    if (result === "Win!") {
        whoWin.textContent = "Victory".toUpperCase();
        whoWin.style.color = "green";
        gameScore.wins ++;
        document.querySelector("[data-sumary=number-wins] span").textContent = gameScore.wins;
    } else if (result === "Loose!") {
        whoWin.textContent = "Defeat".toUpperCase();
        whoWin.style.color = "red";
        gameScore.losses ++;
        document.querySelector("[data-sumary=number-losses] span").textContent = gameScore.losses
    } else {
        whoWin.textContent = "Draw!".toUpperCase();
        whoWin.style.color = "gray";
        gameScore.draws ++;
        document.querySelector("[data-sumary=number-draws] span").textContent = gameScore.draws
    }
}


function start() {
    gameScore.numberOfGames ++;
    const whoWin = document.querySelector("[data-sumary=who-win] span");
    if (game.playerChoice === "") {
        return alert("Wybierz pokemona!")
    }
    aiSelection();
    playerVsAi(game.playerChoice, game.aiChoice)
    let result = playerVsAi(game.playerChoice, game.aiChoice);
    scoreShow(game.playerChoice, game.aiChoice, result, whoWin);
}


btn.addEventListener("click", start);

pokemons.forEach(pokemon => pokemon.addEventListener("click", pokemonSelection));


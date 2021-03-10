const pokemons = document.querySelectorAll(".figure");
const btn = document.querySelector(".start");
let store =  {
    numberOfGames: 0,
    wins: 0,
    draws: 0,
    losses: 0,
}
if (JSON.parse(localStorage.getItem("obj"))) {
    store = JSON.parse(localStorage.getItem("obj"));
    console.log(store);
    document.querySelector("[data-sumary=number-games] span").textContent = store.numberOfGames;
    document.querySelector("[data-sumary=number-wins] span").textContent = store.wins;
    document.querySelector("[data-sumary=number-losses] span").textContent = store.losses;
    document.querySelector("[data-sumary=number-draws] span").textContent = store.draws;
}
const gameScore = {
    numberOfGames: store.numberOfGames,
    wins: store.wins,
    draws: store.draws,
    losses: store.losses,
}

const game = {
    playerPokemon: "",
    aiPokemon: "",
}

function pokemonSelection() {
    game.playerPokemon = this.dataset.option
    pokemons.forEach(pokemon => pokemon.style.boxShadow = "");
    if (game.playerPokemon === "charmander") {
        this.style.boxShadow = "0 0 0 4px #fe9441"
    } else if (game.playerPokemon === "squirtle") {
        this.style.boxShadow = "0 0 0 4px #93c8d0"
    } else {
        this.style.boxShadow = "0 0 0 4px #89C893"
    }
}

function aiSelection() {
    game.aiPokemon = Math.floor(Math.random() * 3 + 1)
    if (game.aiPokemon === 1) {
        game.aiPokemon = "charmander";
    } else if (game.aiPokemon === 2) {
        game.aiPokemon = "squirtle"
    } else {
        game.aiPokemon = "bulbasaur"
    }
    return game.aiPokemon
}

function playerVsAi(player, ai) {
    if (player === "charmander" && ai === "bulbasaur" || player === "bulbasaur" && ai === "squirtle"
        || player === "squirtle" && ai === "charmander") {
        return "win"
    } else if (player === ai) {
        return "draw"
    } else {
        return "lose"
    }

}

function scoreShow(player, ai, result, whoWin) {
        document.querySelector("[data-sumary=your-choice] span").textContent = player.toUpperCase();
        document.querySelector("[data-sumary=ai-choice] span").textContent = ai.toUpperCase();
        document.querySelector("[data-sumary=number-games] span").textContent = gameScore.numberOfGames
    if (result === "win") {
        whoWin.textContent = "Victory".toUpperCase();
        whoWin.style.color = "green";
        gameScore.wins ++;
        document.querySelector("[data-sumary=number-wins] span").textContent = gameScore.wins;
    } else if (result === "lose") {
        whoWin.textContent = "Defeat".toUpperCase();
        whoWin.style.color = "red";
        gameScore.losses ++;
        document.querySelector("[data-sumary=number-losses] span").textContent = gameScore.losses
    } else {
        whoWin.textContent = "draw".toUpperCase();
        whoWin.style.color = "gray";
        gameScore.draws ++;
        document.querySelector("[data-sumary=number-draws] span").textContent = gameScore.draws
    }
}

function endGame () {
    pokemons.forEach(pokemon => pokemon.style.boxShadow = "");
    game.playerPokemon = "";
}

function start() {
    gameScore.numberOfGames ++;
    const whoWin = document.querySelector("[data-sumary=who-win] span");
    if (game.playerPokemon === "") {
        return alert("Wybierz pokemona!")
    }
    aiSelection();
    playerVsAi(game.playerPokemon, game.aiPokemon)
    let result = playerVsAi(game.playerPokemon, game.aiPokemon);
    scoreShow(game.playerPokemon, game.aiPokemon, result, whoWin);
    localStorage.setItem("obj", JSON.stringify(gameScore));
    console.log("obj");
    endGame();

}

btn.addEventListener("click", start);

pokemons.forEach(pokemon => pokemon.addEventListener("click", pokemonSelection));


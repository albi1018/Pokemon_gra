const pokemons = document.querySelectorAll(".figure");

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

function pokemonSelection () {
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



pokemons.forEach(pokemon => pokemon.addEventListener("click", pokemonSelection));


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
    
}



pokemons.forEach(pokemon => pokemon.addEventListener("click", pokemonSelection));


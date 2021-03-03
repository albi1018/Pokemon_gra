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

pokemons.forEach(pokemon => {
    pokemon.addEventListener("click",() => {
        game.playerChoice = pokemon.dataset.option
        console.log(game.playerChoice);
    })
})

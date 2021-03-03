const pokemons = document.querySelectorAll(".figure");

pokemons.forEach(pokemon => {
    pokemon.addEventListener("click",() => {
        pokemon.style.border = "";
       pokemon.style.border = "1px solid black";
    })
})

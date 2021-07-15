const fetchPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/444'

    fetch(url).then(Response => Response.json()).then(pokemon => console.log(pokemon))
}

fetchPokemon()
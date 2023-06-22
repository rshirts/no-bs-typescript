import fetch from "cross-fetch";

interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

type fetchURLReturn<T> = T extends undefined ? Promise<PokemonResults> : void;

function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)> (url: string, cb?: T): fetchURLReturn<T> {
  if (cb) {
    fetch(url)
      .then(resp => resp.json())
      .then((resp) => cb(resp as PokemonResults));
    return undefined as fetchURLReturn<T>;
  } else {
    return fetch(url).then(resp => resp.json()) as fetchURLReturn<T>;
  }
}

// fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10", (data => {
//   data.results.forEach((pokemon) => console.log(pokemon.name))
// }))

(async function() {
  const data = <PokemonResults>(await fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10"));
  data.results.forEach((pokemon) => console.log(pokemon.name));
})();
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

function fetchPokemon(url: string, cb: (data: PokemonResults) => void): void;
function fetchPokemon(url: string ): Promise<PokemonResults>;
function fetchPokemon(url: string, cb?: (data: PokemonResults) => void): unknown {
  if (cb) {
    fetch(url)
      .then(resp => resp.json())
      .then((resp) => cb(resp as PokemonResults));
    return undefined;
  } else {
    return fetch(url).then(resp => resp.json());
  }
}

fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10", (data => {
  data.results.forEach((pokemon) => console.log(pokemon.name));
}));

(async function() {
  const data = <PokemonResults>(await fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10"));
  data.results.forEach((pokemon) => console.log(pokemon.name));
})();
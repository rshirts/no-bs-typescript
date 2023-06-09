enum LoadingState {
  beforeload = "beforeload",
  loading = "loading",
  loaded = "loaded"
}

const englishLoadingStates = {
  [LoadingState.beforeload]: "Before Load"
}

const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoading(LoadingState.beforeload));


// Literal types
//numbers

function rollDice (dice: 1 | 2 | 3): number {
  let pip = 0;
  for( let i = 0; i < dice; i++) {
    pip += Math.floor((Math.random() * 5)) + 1;
  }
  return pip;
}

console.log(rollDice(3));


//strings
function sendEventEnums(name: "addToCart", data: {productID: number;}): void
function sendEventEnums(name: "checkout", data: {cartCount: number;}): void
function sendEventEnums(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`)
}

//sendEvent("addToCart", {})
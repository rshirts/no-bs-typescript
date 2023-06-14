interface Cat {
  readonly name: string;
  breed: string;
}

function makeCat(name: string, breed: string) : Readonly<Cat> {
  return {
    name,
    breed
  }
}

const usul = makeCat("Usul", "Tabby");

// usul.name = "Piter";

function makeCoordinate(x: number, y: number, z: number): readonly [number, number, number] {
  return [x, y, z]
}

const c1 = makeCoordinate(10,20,30);
// c1[0] = 50;


//How to make Standard array fully immutable

// doesn't work
// const reallyConst = readonly [1, 2, 3];
// const reallyConst = [1, 2, 3] as readonly;

// works
const reallyConst = [1, 2, 3] as const;

// reallyConst = 50;

interface Testing {
  a: number;
  b: number;
}

//Doesn't work
const testing: Testing = {
  a: 1,
  b: 2,
} as const

testing["a"] = 2;

// Works
const testing2: Readonly<Testing> = {
  a: 1,
  b: 2,
}

//testing2["a"] = 2;



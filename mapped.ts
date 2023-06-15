// How to implement this without using record
type MyFlexableDogInfoEx = {
  name: string;
} & Record<string, string>;

const dogEx:MyFlexableDogInfoEx = {
  name: "LG",
  breed: "Mutt"
}

type MyFlexableDogInfo = {
  name: string;
  [key: string]: string | number;
}

const dog:MyFlexableDogInfo = {
  name: "LG",
  breed: "Mutt",
  age: 22
}

interface DogInfo {
  name: string;
  age: number;
}

type OptionsFlags<T> = {
  [Property in keyof T]: boolean;
};

type DogInfoOptions = OptionsFlags<DogInfo>

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw "needs to be implemented";
}

const lg:DogInfo = {
  name: "LG",
  age: 13
}

type Listeners<T> = {
  [Property in keyof T as `on${Capitalize<string & Property>}Change`]?: (newValue: T[Property]) => void;
} & {
  [Property in keyof T as `on${Capitalize<string & Property>}Delete`]?: () => void;
}

type DogInfoListeners = Listeners<DogInfo>;

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {}
})
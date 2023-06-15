class Doggy {
  constructor(public readonly name: string, public readonly age: number) {

  }
}

const lgg = new Doggy("LG", 13);
// To avoid this add readonly to the declaration
// lgg.name = "Foo" 
console.log(lgg.name)

// Singleton
class DogList {
  private doggies: Doggy[] = [];
  static instance: DogList = new DogList();
  // private constructor prevents you from being able to make multiple doglists
  private constructor() {}
  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs() {
    return this.doggies;
  }
}

//This makes it so you can have only one instance of the DogList instance but you can still have multiple dog lists unless you have a private constructor.

DogList.instance;

DogList.addDog(lgg);

console.log(DogList.instance.getDogs());

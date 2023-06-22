function myLogFunction() {
  return (str: string) => {
    console.log(str);
  }
}

const logger = myLogFunction();

logger("your string");


function createLoggerClass() {
  return class MyLoggerClass {
    private completeLog: string = "";
    log(str: string) {
      console.log(str);
      this.completeLog += str + "\n";
    }

    dumpLog() {
      return this.completeLog;
    }
  }
}

const myLogger = createLoggerClass();

const logger2 = new myLogger();
logger2.log("Foo");
console.log(logger2.dumpLog());

function CreateSimpleMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string, T> = {};

    set(id: string, value: T) {
      this.db[id] = value;
    }

    get(id: string): T {
      return this.db[id];
    }

    getObject(): object {
      return this.db;
    }
  }
}

const stringDatabase = CreateSimpleMemoryDatabase<string>();

const sdb1 = new stringDatabase();

sdb1.set("a", "hello");

type Constructor<T> = new (...args: any[]) => T;

function Dumpable<T extends Constructor<{getObject(): object;}>>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  }
}

const DumpableStringDatabase = Dumpable(stringDatabase);
const sdb2 = new DumpableStringDatabase();
sdb2.set("jack", "hello jack");
sdb2.dump();
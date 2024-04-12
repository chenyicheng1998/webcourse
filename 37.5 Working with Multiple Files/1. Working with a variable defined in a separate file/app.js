import * as counter from "./counter.js";
import * as another from "./counter.js";

console.log(counter.get());
counter.increment();
console.log(counter.get());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());

console.log(another.get());
another.increment();

console.log(counter.get());
console.log(another.get());
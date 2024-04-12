import * as nameService from "./services/nameService.js";

console.log(nameService.get());
nameService.set("John Doe");
console.log(nameService.get());
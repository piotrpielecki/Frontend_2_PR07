import { Person } from "../lib/Person";

let kowalski: Person = new Person("Jan", "Kowalski", 84011201858);
console.log("\nSzczegóły Kowalski:");
console.log("isAdult=" + kowalski.isAdult);
console.log("gender=" + kowalski.gender);
console.log("getAge=" + kowalski.getAge());
console.log(kowalski.details());

console.log("\nSzczegóły Nowak:");
let nowak: Person = new Person("Anna", "Nowak", 12050401684);
nowak.setCity("Szczecin");
nowak.setStreet("Żołnierska 53");
nowak.setZipCode("71-210");
console.log("isAdult=" + nowak.isAdult);
console.log(nowak.details());

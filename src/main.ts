import { Person } from "./lib/Person";
import { Worker } from "./lib/Worker";
import { Manager } from "./lib/Manager";
import { WorkersTeam } from "./lib/WorkersTeam";

window.addEventListener('DOMContentLoaded', function (event) {
    window.document.getElementById("btn001").addEventListener("click", function () {
        let person = new Person("Jan", "Nowak", 8503043439);
        console.log("Button Person: " + person.getName());
    });
    window.document.getElementById("btn002").addEventListener("click", function () {
        let worker = new Worker("Adam", "Pracownik", 8503043439, "digger operator");
        console.log("Button Worker: " + worker.getName());
        console.log("Job position: " + worker.getJobPosition());
    });

    let teamA: WorkersTeam = new WorkersTeam("The A Team");
    let teamB: WorkersTeam = new WorkersTeam("The B Team");

    let mrt = new Worker("B.A.", "Baracus", 6303043439, "mechanic");
    let murdock = new Worker("Captain", "Murdock", 6504043432, "pilot");
    let face = new Worker("Lieutenant", "Face", 6204045431, "driver");

    teamA.addWorker(mrt);
    teamA.addWorker(murdock);
    teamB.addWorker(face);

    let manager = new Manager("John", "Smith", 5403043456, "boss");
    manager.addTeam("A Team", teamA);
    manager.addTeam("B Team", teamB);
    manager.delegateWorker("A Team", "B.A.");
});

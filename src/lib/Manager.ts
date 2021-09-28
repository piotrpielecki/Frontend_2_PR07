import { WorkersTeam } from "./WorkersTeam";
import { Worker } from "./Worker";

export class Manager extends Worker {
    teams: Map<string, WorkersTeam>;

    constructor(name: string, surname: string, pesel: number, jobPosition: string) {
        super(name, surname, pesel, jobPosition);
        this.teams = new Map<string, WorkersTeam>();
    }

    addTeam(teamName: string, team: WorkersTeam) {
        this.teams.set(teamName, team);
    }

    delegateWorker(teamName: string, workerName: string) {
        let worker: Worker|false;
        let team = this.teams.get(teamName);
        
        worker = team.getWorker(workerName);

        if (worker instanceof Worker) {
            worker.doWork();
        } else {
            console.log("Couldn't find worker: " + workerName)
        }
        
    }


}

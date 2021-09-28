import { Worker } from "./Worker";

export class WorkersTeam {
    teamName: string;
    workers: Array<Worker>;

    constructor(teamName: string) {
        this.teamName = teamName;
        this.workers = new Array<Worker>();
    }

    checkWorkers() {
        this.workers.forEach((worker: Worker) => {
            console.log("Worker " + worker.getName());
        });
    }

    getWorker(workerName: string): Worker|false {

        for (let i = 0; i < this.workers.length; i++) {
            if (this.workers[i].getName() == workerName) {
                return this.workers[i];
                
            }
        }
        return false;
    }

    addWorker(worker: Worker) {
        this.workers.push(worker);
    }
}

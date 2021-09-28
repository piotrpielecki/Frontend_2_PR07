import { Person } from "./Person";

export class Worker extends Person {
    private jobPosition: string;

    constructor(name: string, surname: string, pesel: number, jobPosition: string) {
        super(name, surname, pesel);
        this.jobPosition = jobPosition;
    }

    doWork() {
        console.log(`This is '${this.getName()}' my job is '${this.jobPosition}' and i'm
        working now.`);
    }

    getJobPosition(): string {
        return this.jobPosition;
    }
}

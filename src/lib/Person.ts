import { type } from "os";

export class Person {
    private name: string;
    private lastName: string;
    private age: number;
    private PESEL: number;
    public isAdult: boolean;
    public gender: string;
    private city: string;
    private street: string;
    private zipCode: string;
    private dateOfBirth: string;


    public setCity(city: string) {
        this.city = city;
    }

    public setStreet(street: string) {
        this.street = street;
    }

    public setZipCode(zipCode: string) {
        this.zipCode = zipCode;
    }

    public getName() {
        return this.name;
    }

    public details() {
        let returnString = '';

        returnString = returnString.concat("PESEL: " + this.PESEL);
        returnString = returnString.concat("\nName: " + this.name);
        returnString = returnString.concat("\nSurName: " + this.lastName);
        returnString = returnString.concat("\nAge: " + this.age);
        returnString = returnString.concat("\nDate of Birth: " + this.dateOfBirth);
        returnString = returnString.concat("\nGender: " + this.gender);
        if (this.street != '' && this.street != undefined) {
            returnString = returnString.concat("\nAddress: " + this.street + " "+ this.city + " "+ this.zipCode + " ");
        } else {
            returnString = returnString.concat("\nAddress: unknown");
        }
        

        return returnString;
    }

    public getAge() {
        return this.age;
    }

    constructor(name: string, lastName: string, PESEL: number) {
        this.name = name;
        this.lastName = lastName;
        this.PESEL = PESEL;

        let pesel = PESEL.toString();
        var rok = parseInt(pesel.substring(0, 2), 10);
        var miesiac = parseInt(pesel.substring(2, 4), 10) - 1;
        var dzien = parseInt(pesel.substring(4, 6), 10);

        if (miesiac > 80) {
            rok = rok + 1800;
            miesiac = miesiac - 80;
        }
        else if (miesiac > 60) {
            rok = rok + 2200;
            miesiac = miesiac - 60;
        }
        else if (miesiac > 40) {
            rok = rok + 2100;
            miesiac = miesiac - 40;
        }
        else if (miesiac > 20) {
            rok = rok + 2000;
            miesiac = miesiac - 20;
        }
        else {
            rok += 1900;
        }

        var urodzony = new Date();
        urodzony.setFullYear(rok, miesiac, dzien);
        this.dateOfBirth = urodzony.toDateString();


        if (parseInt(pesel.substring(9, 10), 10) % 2 === 1) {
            var plec = 'Male';
        } else {
            var plec = 'Female';
        }
        this.gender = plec;


        var now   = new Date();
        let age = (now.getTime() - urodzony.getTime()) / 1000 / 31556952;
        age = parseInt(age.toFixed(0));
        if (age => 18) {
            this.isAdult = true;
        } else {
            this.isAdult = false;
        }
        this.age = age;

    }
}
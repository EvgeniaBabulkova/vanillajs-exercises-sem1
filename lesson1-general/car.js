export class Car {
    constructor(make, model, year, isRunning) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isRunning = isRunning;
        }

    getCarInfo() {
        return `${this.make} ${this.model} ${this.year}`;
    }

    start() {
        this.isRunning = true;
        return 'The car has started';
    }

    stop() {
        this.isRunning = false;
        return 'The car stopped'
    }

}

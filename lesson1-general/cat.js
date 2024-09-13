//EXERCISE CLASS
export class Cat {
    constructor(name, color, breed) {
        this.name = name;
        this.color = color;
        this.breed = breed;
    }

    bio() {
        console.log('My cat is called' + ' ' + this.name + ' ' + 'it is' + ' ' + this.color + ' ' + 'and the breed is' + ' ' + this.breed)
        console.log(`My cat is called ${this.name} it is ${this.color} and the breed is ${this.breed}`);
    }

    setName(name) {
        this.name = name;
    }
}






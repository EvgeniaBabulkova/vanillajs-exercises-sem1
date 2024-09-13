

//EXERCISE FUNCTIONS & OBJECTS 02.09---------------------------------------------------------------------------------------------------------------

import { Car } from "./car.js";
import { Cat } from "./cat.js";

// Create a javascript function that takes firstname and lastname as 2 parameters and
// uses console.log() to output the person's name. Check that it works and is printet correctly

function fullName(name1, name2) {
    return name1 + ' ' + name2;
}
console.log(fullName('James', 'Nestor'));


// Create a function that calculates the area of a rectangle. The function should return
// the result. Test that it works

function areaOfARectangle(a, b) {
    return a * b;
}
console.log(areaOfARectangle(5, 6));


// Create a function that takes speed and time as 2 parameters and calculates and returns the distance. 
// Use the function to test that it works by using the 'log' again. Print out "You have travelled *x* km" where *x* is replaced by the result from the function.

function calculateDistance(speed, time) {
    return speed * time;
}
const distance = calculateDistance(70, 2);
console.log('You have traveled', distance, 'km')


// Create an object called calculator with the name of the owner (eg. Your name) and
// modify your code so the 3 previous functions are attached to the object

const calculator = {
    fullName: function(name1, name2) {
        return name1 + ' ' + name2;
    },
    areaOfARectangle: function(a, b) {
        return a * b;
    },
    calculateDistance: function(speed, time) {
        return speed * time;
    },
}
console.log(calculator.fullName('James', 'Nestor'));
console.log(calculator.areaOfARectangle(10, 3));
console.log(calculator.calculateDistance(70, 2));






//EXERCISE CLASS 02.09----------------------------------------------------------------------------------------------------------------------------

// Create a Cat class with name, color, breed
// Create a constructor that takes 3 parameters to create an object with name, color, breed
// Create a function/method that returns the cat's data
const cat1 = new Cat('Mimi', 'black', 'some breed');
cat1.bio();

// Exercise 4 - Create a function that can change the cat's name
cat1.setName('Pixy');
console.log(cat1.name);







//EXERCISE CAR 02.09---------------------------------------------------------------------------------------------------------------------------
// Define the Car class:
//      Create a class named Car.
//      Add a constructor that accepts make, model, and year as parameters and initializes these properties
// Add Methods:
//      getCarInfo method: This method should return a string containing the car's make, model, and year.
//      start method: This method should set a property called isRunning to true and return a string indicating the car has started.
//      stop method: This method should set the isRunning property to false and return a string indicating the car has stopped.

const car1 = new Car('make123', 'modernmodel', 1930)
console.log(car1.getCarInfo());

const start = car1.start();
console.log(start);

// const stop = car1.stop();
// console.log(stop);        // the 2 lines make the same thing as here:
console.log(car1.stop());


// Create Instances and Test Methods:
//      Create two instances of the Car class with different make, model, and year values.
//      Call the getCarInfo, start, and stop methods on these instances and print the results to verify that everything works as expected.

const car2 = new Car('make456', 'oldmodel', 1900);
console.log(car2.getCarInfo());
console.log(car2.start());
console.log(car2.stop());








// EXERCISE: ARRAYS 02.09------------------------------------------------------------------------------------------------------------------------------
// ▪ Create an array with 5 names. Print out the first element (name) using console.log()
// ▪ Use the indexOf function to get the index of a name that exists in your array.
// ▪ Try the indexOf function with a name that does not exist. What is returned?
// ▪ Use the push function to add a new name to the array of names, so you have 6 names in the array. 'log' the array to verify.
// ▪ Use the slice function on the array, to create a new array with the first 3 names. 'log' the array to verify.

let names = ["Ema", "Didi", "Pipi", "Sarah", "Ninaa"];
console.log(names[0])

let index = names.indexOf("Didi")
console.log(index) //prints 1
let nonexistentIndex = names.indexOf("Mimi")
console.log(nonexistentIndex)  //prints -1 - doesnt exist

names.push("Minaaa")
console.log(names)
console.log(names.length)


const slicedArray = names.slice(0, 3) //remember - it doesnt take the 3rd element if i write end - 3, only the 2 before it
console.log(slicedArray)


// ▪ Create 2 objects with firstname, lastname, email – values. Add the two objects to a
//    new array. 'log' the array to verify. Also 'log' the first objects' email in a separate 'log'


class Object {
    constructor(namee1, namee2, email){
        this.namee1 = namee1;
        this.namee2 = namee2;
        this.email = email;
    }
}

const object1 = new Object ("Selesti", "Greengots", "silly@me.com");
const object2 = new Object ("Rees", "Simpson", "rizzthiss@yeah.com");

let newArray = [object1, object2];
console.log(newArray)

const firstEmail = newArray[0].email
console.log(firstEmail)








// EXERCISE ARRAYS & OBJECTS - student grades management -------------------------------------------------------------------------------------------------------
// ▪ Create a Student Object:
    // Define a Student object with properties: name, id, and grades (an array of numbers)

// ▪ Add Grades:
    // Write a function named addGrade that takes a Student object and a grade (number) as parameters, and adds the grade to the student's grades array.
    //OR just put the function inside and u dont need to take the student object as a parameter cause you're inside already

// ▪ Update Student Name:
    // Write a function named updateStudentName that takes a Student object and a new name as parameters and updates the student's name.

// ▪ Test the Functions:
// ▪ Create a student object.
// ▪ Add a few grades to the student.
// ▪ Update the student's name and print the updated object.


class Studentttt {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.grades = []; // nesting the empty array inside the class
        this.something = [];
    }


    renameStudent(newName) {
        this.name = newName;
    }

    addAGrade(grade) {
        this.grades.push(grade) //we use push, bc we want to add sth to an ARRAY
    }

}

function addSth (aStudentInstance, someValue) { //if i am to add the function outside the class, i can create a property - aStudentInstance, that would be replaced with an actual object when i create one from the class
    aStudentInstance.something.push(someValue)
    return aStudentInstance.something; // the return is necessary, so that the function doesn't just push sth to the array, but also prints the value after I have added it(modified it)

}

const newStudentSth = new Studentttt ("Kristina", 32515);
newStudentSth.addAGrade(4);
console.log(`This is NEW SOMETHING: ${addSth(newStudentSth, 333)}`)
addSth(newStudentSth, 222)
addSth(newStudentSth, 111)
console.log(`that is ${newStudentSth.something}`)  //those are called template literals
console.log(newStudentSth)




const newStudent1 = new Studentttt ("Felicia", 43280344)
newStudent1.addAGrade(12)
newStudent1.addAGrade(4)
console.log(newStudent1)

newStudent1.renameStudent("Benny")
console.log(newStudent1)
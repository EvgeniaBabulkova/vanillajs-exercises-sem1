// EXERCISE: LOOPS & ARRAYS 09.09------------------------------------------------------------------------------------------------------------------------- 

// Create an array of with the following values: 'Peter', 7, 'Marianne', true, 'Helle' and 8. Notice it is a mix of strings, numbers and a boolean.
// Use a loop to iterate over the array and generate the following in the console:
// Peter is a string
// 7 is a number
// Marianne is a string
// true is a boolean
// Helle is a string
// 8 is a number
// Hint: You can use typeof to determine the type of a value


let anArray = ['Peter', 7, 'Marianne', true, 'Helle', 8]

console.log(`------------------Whith for of loop`)
//solving it with a for of loop
for (let aThing of anArray) {
    console.log(`${aThing} is a ${typeof(aThing)}`)
}


console.log(`------------------with forEach loop`)

//solving it with a forEach loop
anArray.forEach((thing) => {
    console.log(`${thing} is a ${typeof(thing)}`)
})








//EXERCISE: LOOPS AND OBJECTS 09.09-----------------------------------------------------------------------------------------------------------------------------------------
// ▪ Create an array of book objects, with title and author (where both are strings) Create 5 objects in the array.
// ▪ Create an HTML page with a <ul>.
// ▪ Write javascript that loops over the array of book objects and create a new <li> for each book object 
//      and add the title and author to the <li> and insert it into the <ul>.
// ▪ Verify that it works with any number of objects by removing 2 of the 5 objects from the array and run it again.



class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

const firstBook = new Book ("title1", "author1");
const secondBook = new Book ("title2", "author2");
const thirdBook = new Book ("title3", "author3");
const forthBook = new Book ("title4", "author4");
const fifthBook = new Book ("title5", "author5");

let booksArray = [firstBook, secondBook, thirdBook, forthBook, fifthBook]
const bookList = document.getElementById("bookList");


booksArray.forEach((book) => {
    const newLiItem = document.createElement("li");
    newLiItem.textContent = `This book: ${book.title} was written by ${book.author}`
    bookList.appendChild(newLiItem)

})







// EXERCISES 09.09 -------------------------------------------------------------------------------------------------------------------------------------------
// ▪ Create a function, findLargest, that takes 4 numbers as 4 parameters and returns the largest of the 4 numbers.
// ▪ Create a function that takes 3 numbers as 3 parameters. The first parameter is the
// number to check. The 2nd and 3rd parameter is a range (from and to). If the first
// parameter is within the range of the range it should return true and false if not.

function findLargestNumber (num1, num2, num3, num4) {   //takes 4 numbers as parameters
    let largest = num1;
    if (num1 < num2) {
        largest = num2
    };

    if (num2 < num3) {
        largest = num3
    };

    if (num3 < num4) {
        largest = num4
    }

    return largest
}
console.log(`The largest num is: ${findLargestNumber(3,5,4,3)}`)



// EXERCISE MR DUCK 03.09---------------------------------------------------------------------------------------------------------------------------
// • The website should have:
// • A header with, preferably, a rubber duck in a suite as logo. done
// • A text input of some sort, allowing you to explain your problem to Mr. Duck



let problemsArray = [];

function addNewProblem() {
    const newProblemText = document.getElementById("newProblemText").value; //omg
    const newProblem = document.createElement("li");
    newProblem.textContent = newProblemText;  //says to return the textContent of this element (and equals it to the new )
    newProblem.title = formatCurrentDate();   //this should show the date when each element was created - on hover

    document.getElementById("problemsList").appendChild(newProblem);


    if (newProblemText.trim() === "") {   //if the newProblemText is empty, or trim() method listens for spaces then...
        return; //this stops executing the if statement if the condition is met
    }

    problemsArray.push(newProblemText)
    // console.log(problemsArray) //interesting, if the consolelog is outside the function it only returns the first value - when the function had ran once i suppose
    localStorage.setItem("savedProblems", JSON.stringify(problemsArray)); //.setItem(key, value)
    
    console.log("Updated localStorage data:", JSON.parse(localStorage.getItem("savedProblems"))); //every time the function runs i load the code that shows what we have saved


}





document.getElementById("addProblem").addEventListener("click", () => {
    addNewProblem()  //we put () cause otherwise we will get the function, but now execute it
    document.getElementById("newProblemText").value = "" //this removes the text from the input field hehe
})


document.getElementById("newProblemText").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addNewProblem();
        document.getElementById("newProblemText").value = "" //gotta put this inside the if statement, othrewise the elements will get deleted after the first symbol is put in

    }
})




// Extras: Hover effect 03.09------------------------------------------------------------------------------------------------------------------------------
// • Add Easter egg Hover effect on Mr. Duck
// • Basically up to you, what kind of easter egg effect you want to do.
// • Don’t just use a simple CSS hover effect!
// • Add something more interessting.
// • E.g. Mr.Duck uses console.log() to write a message to the console, when you hover it.

const logo = document.getElementById("mrDucky")

logo.addEventListener("mouseover", () => {
    console.log("This is a hidden message, that you my friend have found, Cheers!")
    hiddenMessage.classList.remove("hidden");
    hiddenMessage.classList.add("visible")

})

logo.addEventListener("mouseout", () => {
    hiddenMessage.classList.remove("visible");
    hiddenMessage.classList.add("hidden")
})





// Extras: LocalStorage (supplementary) 03.09------------------------------------------------------------------------------------------------------------------------------
// • We want the site to save all our messages, so it remembers our messages whenever we reload.
// • Procedure:
// • Whenever the user types a message, add the message to an array //added it in the function above
// • Save that array to LocalStorage.
// • Whenever the site loads (add an event listener for “load”), the site retrieves the array from LocalStorage.
// • And fills the DOM, with the retrieved messages.

function loadSavedProblems() {
    const savedProblems = localStorage.getItem("savedProblems")

    if (savedProblems) {
        problemsArray = JSON.parse(savedProblems)

        problemsArray.forEach(problem => {
            const newProblem = document.createElement("li");
            newProblem.textContent = problem;
            newProblem.title = formatCurrentDate();
            document.getElementById("problemsList").appendChild(newProblem);
        });
    }
}

window.addEventListener("load", loadSavedProblems);





// Extra Exercise 03.09
// • HTML:
// • Create a <select> dropdown with several options representing different items.
// • Add an empty <ul> element to serve as the list where items will be added or removed.

// • CSS:
// • Style the list and items for better visual representation.

// • JavaScript:
// • Add an event listener to the <select> element that adds a new <li> item to the <ul> when an option is selected. 
//   If the item already exists, it should be removed instead.





// ▪ EXERCISE Today Mr.Duck is going to answer us! But in a polite manner 10.09------------------------------------------------------------------------------------
// ▪ So first we need to tell him our name.
// ▪ Add an event listener on the window for load.
// ▪ Prompt the user for their name.
// ▪ Make Mr. Duck say hello to us, when the page loads.


window.onload = function () {
    const name = prompt("What is your name gentleman?")
    document.getElementById("greeting").textContent = `Good day to you ${name}, tell me your problems now!!!!!`
}


// DATE EXERCISE 10.09--------------------------------------------------------------------------------------------------------------------------------------------
// ▪ Lets add a timestamp to our messages on Mr. Duck.
// ▪ Adding title to an html element, will give us a hover with the desired text.
// ▪ Format of that Date: “DD/MM/YYYY, hh:mm

//the - newProblem.title = new Date(); - gives the date on hover
//if u create a function with the code on top as a constant d, u can
//make constants for each element of the date and then add it with `date inside`




function formatCurrentDate() {
    const now = new Date();

    const day = now.getDate();  //those are functions - they need the (), getDay returns day of the week, not month, thats why - getDate
    const month = now.getMonth() + 1; //cause months start from 0
    const year = now.getFullYear();
    const hours = now.getHours(); //in 24h format
    const mins = now.getMinutes();

    // function add0IfNeeded(number) {
    //     if (number < 10) {              //return number < 10 ? "0" + number : number (thats with the ternary operator)
    //         return "0" + number
    //     } else return number
    // }

    function add0IfNeeded(number){
        return number < 10 ? "0" + number : number
    }

    const formattedDate = `${add0IfNeeded(day)}/${add0IfNeeded(month)}/${add0IfNeeded(year)} ${add0IfNeeded(hours)}:${add0IfNeeded(mins)}`
    return formattedDate
} 






//ASYNC EXERCISE - FORCE JOKE 10.09 ------------------------------------------------------------------------------------------------------------------------------


document.getElementById('force-answer-btn').addEventListener('click', async function() { 

    try {       // Fetch the joke from the JokeAPI
        const jokeContainer = document.getElementById('joke-container');
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const jokeData = await response.json();


        // Check if it's a single joke or two-part joke
        if (jokeData.type === 'single') {
            jokeContainer.textContent = jokeData.joke; // Single part joke
        } else if (jokeData.type === 'twopart') {
            jokeContainer.innerHTML = `<strong>${jokeData.setup}</strong><br>${jokeData.delivery}`; // Two-part joke
        }

    } catch (error) {
        // Display error message in case fetching fails
        document.getElementById('joke-container').textContent = "Mr. Duck is out of jokes for now!";
        console.error("Error fetching joke:", error); // Log the error for debugging
    }
    
});





// Extra Exercises 10.09 -----------------------------------------------------------------------------------------------------------------------------------------
// ▪ Finish the user page, with if statements, so all the custom validation works, and displays the error messages.
// ▪ Add a delay to Mr. Ducks puns, to improve his timing. Add a Profanity filter to the users input field,
// ▪ So whenever the user types something, that input is checked, by some simple string matching, and discarded if it contains foul language.

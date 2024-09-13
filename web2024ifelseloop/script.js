
//EXERCISE: HIGHLIGHTED NUMBERS 09.09 ---------------------------------------------------------------------------------------------------------------------------

// Get the container element
const numberList = document.getElementById("number-list");


// Loop through numbers from 1 to 20
for (let i = 1; i <= 20; i++) {  // for (starting point, condition to loop until, how to move forward with each item)

    // Create a new div element for each number
    const divElement = document.createElement("div") //here, there awlays has to be a valid html element
    divElement.textContent = i
    numberList.appendChild(divElement)

    divElement.classList.add("number");  //adds the number class to all new div elements


    // Check if the number is even or odd and apply the appropriate class
    if (i % 2 === 0) {   //% is the reminder - if there is no decimal reminder after you divide the i by 2, then the number is even (5%2 = 2.5 - there is a reminder here)
        divElement.classList.add("even")
    }

    else {
        divElement.classList.add("odd")
    }

}

    
    // Add an event listener to highlight the number when clicked

        // Remove highlight from all numbers
        numberList.addEventListener("click", (event) => {
            let currentlyHighlighted = document.querySelectorAll(".highlight") //returns a nodelist, so i need to iterate over it to find if there is a highlighted element

            currentlyHighlighted.forEach(element => {
                if (element.classList.contains("number")) {   //this is supposed to get executed only if u click on a number buttt...
                    element.classList.remove("highlight")
                }
            })
            

            // Add highlight to the clicked number
            if (event.target.classList.contains("number"))  {  //checks if the clicked element has the class number, to make sure u dont highlight sth that is not a number
                event.target.classList.add("highlight")
            }

        })

    


        
    
    
    
    


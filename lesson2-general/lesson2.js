
//EXERCISE SHOW / HIDE 03.09 --------------------------------------------------------------------------------------------------------------------

const button = document.getElementById("button");

button.addEventListener("mouseover", function(){
    message.classList.remove("hidden");
    message.classList.add("visible");
})

button.addEventListener("mouseout", function() {
    message.classList.add("hidden");
    message.classList.remove("visible");
})






//EXERCISE - TO DO LIST 03.09 -----------------------------------------------------------------------------------------------------------------------

function addListElement() {
    const newTodoText = document.getElementById("newTodoText").value
    const newLi = document.createElement("Li");
    newLi.textContent = newTodoText;

    document.getElementById("todoList").appendChild(newLi);

}



document.getElementById("addTodo").addEventListener("click", function(){
    addListElement()
    document.getElementById("newTodoText").value = ""

})



document.getElementById("NewTodoText"),addEventListener("keydown", (event) => {
    if (event.key ==="Enter") {
        addListElement();
        document.getElementById("newTodoText").value = ""
    }
})

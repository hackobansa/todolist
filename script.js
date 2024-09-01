var getInput = document.getElementById("input");
var submitTodo = document.getElementById("submit");
var item = document.querySelector("#item");

submitTodo.addEventListener('click', () => {
    var list = document.createElement('li');
    
    // Create a text node with the input value
    var todoText = document.createTextNode(`${getInput.value}`);
    
    // Create a delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.style.marginLeft = "10px"; // Add some space between the text and the button

    // Add an event listener to the delete button to remove the list item
    deleteBtn.addEventListener('click', () => {
        item.removeChild(list);
    });

    // Append the text node and delete button to the list item
    list.appendChild(todoText);
    list.appendChild(deleteBtn);

    item.style.listStyleType = "none";

    // Append the list item to the todo list
    item.appendChild(list);

    // Clear the input field
    getInput.value = "";
});

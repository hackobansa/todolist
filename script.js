var getInput = document.getElementById("input");
var submitTodo = document.getElementById("submit");
var item = document.querySelector("#item");

submitTodo.addEventListener('click', () => {
    var list = document.createElement('li');
    list.appendChild(document.createTextNode(
        `${getInput.value}`
    ));

   item.style.listStyleType = "none";

    

   item.appendChild(list);

    //clear fields
    getInput.value = "";
})


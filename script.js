console.log("And your name was?");

const submit = document.getElementById("submit");
const my_input = document.getElementById("input");
const response = document.getElementById("name");

const btnClicked = (event) => {
    console.log(event.target.id);
    response.innerHTML = my_input.value;
}

submit.addEventListener("click", btnClicked);
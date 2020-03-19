console.log("And your name was?");

const submit = document.getElementById("submit")
const my_input = document.getElementById("input");
const response = document.getElementById("name")

const btnClicked = (event) => {
    console.log(event.target.id);
    response.innerHTML = my_input.value;
}

submit.addEventListener("click", btnClicked);




// function gettingTheName (event) {
//     console.log(event.target.id)
//     response.innerHTML = my_input.value;
// }


// my_input.addEventListener("type", gettingTheName);


// //  btnClicked = (event) => {
// //     theName.innerHTML = my_input.value;
// //     // input.value = "";
// // }


// // localStorage.setItem("input", "name");

// // document.getElementById("input").innerHTML = localStorage.getItem("theName");


// // const name = document.getElementById("name");

// // const btnClicked = (event) => {
// //     theName.innerHTML = name.value
// //     // name.value = "";
// //     localStorage.setItem()
// // }

// submit.addEventListener("click", btnClicked);
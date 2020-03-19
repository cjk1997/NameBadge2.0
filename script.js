const name = document.getElementById("name");

const btnClicked = (event) => {
    theName.innerHTML = name.value
    // name.value = "";
}

name.addEventListener("click", btnClicked);
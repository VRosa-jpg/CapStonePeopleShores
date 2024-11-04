// Dropdown - Variable
const dropdown = document.querySelector(".dropdown")
const dropdownItems = document.querySelectorAll(".dropdown-item")

// Eventlistener
dropdown.addEventListener("mouseover", (event) => {
    dropdownItems.forEach((item) => {
        console.log(item);
    })
})
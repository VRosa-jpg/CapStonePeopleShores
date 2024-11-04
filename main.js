// Dropdown - Variable
// const dropdown = document.querySelector(".dropDown")
// const dropdownItems = document.querySelectorAll(".dropdown-item")


// // Eventlistener
// dropdown.addEventListener("mouseover", (event) => {
//     dropdownItems.forEach((item) => {
//         // console.log(item);
        
//     })
// })

document.getElementById('dropDown').addEventListener('mouseover', () => {
    document.getElementById('dropdownContent').style.display = 'block';
});

document.getElementById('dropDown').addEventListener('mouseout', function() {
    document.getElementById('dropdownContent').style.display = 'none';
});
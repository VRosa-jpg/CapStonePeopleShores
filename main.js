// Dropdown - Variable
// const dropdown = document.querySelector(".dropDown")
// const dropdownItems = document.querySelectorAll(".dropdown-item")


// // Eventlistener
// dropdown.addEventListener("mouseover", (event) => {
//     dropdownItems.forEach((item) => {
//         // console.log(item);
        
//     })
// })


// Dropdown
document.getElementById('dropDown').addEventListener('mouseover', () => {
    document.getElementById('dropdownContent').style.display = 'block';
});

document.getElementById('dropDown').addEventListener('mouseout', function() {
    document.getElementById('dropdownContent').style.display = 'none';
});

const navcolor = document.getElementById('navBar')
const divInfo = document.createElement('div')

// Logo Name
document.getElementById('secretStash').onmouseover = function () {
    this.style.color = 'red';
    navcolor.style.backgroundColor = 'black';
}




document.getElementById('secretStash').onmouseout = function() {
    this.style.color = 'rgb(81, 196, 111)';
    navcolor.style.backgroundColor = '#071c20';
}

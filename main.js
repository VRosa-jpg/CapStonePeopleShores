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

const navcolor = document.getElementById('navBar');
const myInfoBox = document.createElement("div");
myInfoBox.innerHTML = "This is the text content";
myInfoBox.style.position = 'absolute'; // Set positioning to absolute to control placement on the page
myInfoBox.style.top = '50%'; // Adjust these to position `myInfoBox` at the top of the page
myInfoBox.style.left = '50%';
myInfoBox.style.height = '25%';
myInfoBox.style.width = '25%';
myInfoBox.style.opacity='.53';
myInfoBox.style.display = 'none'; // Initially hidden
document.body.appendChild(myInfoBox);



// Logo Name
document.getElementById('secretStash').onmouseover = function () {
    this.style.color = 'red';
    navcolor.style.backgroundColor = 'black';
    myInfoBox.style.backgroundColor = 'red';
    myInfoBox.style.display = 'block'
    console.log(myInfoBox)
}


document.getElementById('secretStash').onmouseout = function() {
    this.style.color = 'rgb(81, 196, 111)';
    navcolor.style.backgroundColor = '#071c20';
    myInfoBox.style.display = 'none'
    
}

'use strict';



let navListed = document.querySelector('.navListed');
let menuIcon = document.querySelector('#menu-icon');
const navLink = document.querySelectorAll('#anchor');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navListed.classList.toggle('open');
};
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navListed.classList.remove('open')
};

const currentPage = window.location.pathname;
const links = document.querySelectorAll('#anchor');

links.forEach(function(link) {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active')
    }
});

// const emailForm = document.getElementById('emailForm');
// emailForm.addEventListener('submit', function(event) {
//     e.preventDefault();
//     let email = document.getElementById('email').value;
//     if (email.value = "" ) {
//         alert('you most enter your email');
//     }else {
//         alert("failed to submit your email. pls try again");
//     }
// });


// // the home page input-btn // 

// const submitButton = document.getElementById('submitButton');
// const emailInput = document.getElementById('emailInput');
// const emailContainer = document.querySelector('emailContainer');

// submitButton.addEventListener('click', function(e) {
//     if(emailInput.value === "") {
//         alert(' your Email is required ');
//     }
// })

document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    
    // Retrieve the email input value
    const email = document.getElementById("emailInput").value;
    
    // Validate the email (optional)
    if (validateEmail(email)) {
      // Perform any additional actions with the email, such as sending it to a server
      console.log("Email submitted:", email);
      // Reset the form
      document.getElementById("emailForm").reset();
    } else {
      alert("Please enter a valid email address.");
    }
  });
  
  // Email validation function (optional)
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };



const myIcon = document.getElementById('myIcon');

function changeIcon(e) {
    if(myIcon.classList = 'bx-star') {
        myIcon.classList.replace('bxs-star-half');
    }
}




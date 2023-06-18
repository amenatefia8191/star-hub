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

const emailForm = document.getElementById('emailForm');

emailForm.addEventListener('submit', function(event) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    if (email.value = "" ) {
        alert('you most enter your email');
    }else {
        alert("failed to submit your email. pls try again");
    }
});

const myIcon = document.getElementById('myIcon');

function chnageIcon(e) {
    if(myIcon.classList = 'bx-star') {
        myIcon.classList.replace('bxs-star-half');
    }
}




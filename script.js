'use strict';
const hamburger = document.querySelector('#hamburger-icon');
const cancel = document.querySelector('.nav-menu__cancel')
const sidebar = document.querySelector('.sidebar')

const toggleSidebar = function() {
    console.log('clicked')
    sidebar.classList.toggle('hidden')
}
hamburger.addEventListener('click', toggleSidebar)
cancel.addEventListener('click', toggleSidebar)
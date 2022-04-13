const toggleMenu = document.querySelector('.toggle-menu')
const toggleBar = document.querySelector('.toggle-bar')

toggleBar.addEventListener('click', function(e) {
    toggleMenu.classList.toggle('toggle-display')
})

// window.addEventListener('click', function(e) {
//     toggleMenu.style.display = "none";
// })
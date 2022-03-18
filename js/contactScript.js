const toggleMenu = document.querySelector('.toggle-menu')
const toggleBar = document.querySelector('.toggle-bar')

toggleBar.addEventListener('click', function (e) {
    toggleMenu.classList.toggle('toggle-display')
})


const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;
const submit = document.getElementById('submit').value;

const contactInfo = {};

submit.addEventListener('click', function (e) {
    if (name !== '' && message !== '' && email !== '') {
        contactInfo.name = name;
        contactInfo.email = email;
        contactInfo.message = message;
        localStorage.setItem('message', JSON.stringify(contactInfo)) 
    } else {
        alert("input field can't be empty")
    }
})

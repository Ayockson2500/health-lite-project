const fixedmenuBarDisplay = document.querySelector('.sub-container-1')
const toggleBar = document.querySelector('.toggle-bar')
const fixedMenuText = document.querySelector('.menu-text')

toggleBar.addEventListener('click', function(e) {
    e.preventDefault()
    console.log('click me')
    fixedmenuBarDisplay.style.display = 'block';
    fixedmenuBarDisplay.style.marginTop = '4rem'
    fixedMenuText.style.display = 'none'
})




const url = 'https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients'

const myAppoinment = document.querySelectorAll('.total-appointments')
const myWaitingRoom = document.querySelectorAll('.waiting-room-total')
const myTotalPatient = document.querySelector('#total-patient')
const myPatientDetail = document.querySelector('#patient-detail')

fetch(url).then((Response) => {
    Response.json().then((data) => {
        let myData = data
        const appointment = myData.scheduledAppointments
        const totalPatient = myData.totalPatients
        const waitingRoomTotal = myData.waitinfRoom
        const allAppoinments = myData.appointments

        myTotalPatient.innerHTML = totalPatient;
        for (let newAppointment of myAppoinment) {
            newAppointment.innerHTML = appointment
        }
        for (let newWaitingRoom of myWaitingRoom) {
            newWaitingRoom.innerHTML = waitingRoomTotal
        }

        for (let paitentAppoitment of allAppoinments) {
            const name = paitentAppoitment.name;
            myPatientDetail.innerHTML += `<p class="font-small-text font-family-roboto">09:00am</p>
            <div class="appoiment-time bg-semi-white display-flex">
                <div class="image-container-flex">
                    <img src="./img/Ellipse 16.svg" alt="" class="patient-pic" >
                    <p class="font-small-text font-family-roboto patient-name">${name}</p>
                </div>
                <img src="./img/Group.svg" alt="">
            </div>`
        }
    })
})

// ACTIVIES SECTION
const myPatientReport = document.querySelector('#patient-report')

const newUrl = 'https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites'
fetch(newUrl).then((Response) => {
    Response.json().then((data) => {
        let myList = data.activities
        for (let list of myList) {
            if (list.type === 'report') {
                myPatientReport.innerHTML += `<div class="activities-sub-container image-container-flex" id="patient-report">
                <img src="./img/Group 9005.png" alt="">
                <p class="font-family-roboto color-navy font-small-text">${list.title}</p>
            </div>`
            } else if (list.type === 'interview') {
                myPatientReport.innerHTML += `<div class="activities-sub-container image-container-flex" id="patient-report">
                <img src="./img/Group 9005.png" alt="">
                <p class="font-family-roboto color-navy font-small-text">${list.title}</p>
            </div>`
            }
        }
    })
})
// javascript

let dobInput = document.querySelector('#dob');
let calcBtn = document.getElementsByTagName('button')
let message = document.createElement('div');
let mainContainer = document.querySelector('.container');
message.classList.add('eventMessage')
mainContainer.appendChild(message);

let bDay = new Date(dobInput.value);
let today = new Date();

calcBtn[0].addEventListener('click', calculateDays);

function calculateDays() {
    bDay = new Date(dobInput.value);
    let today = new Date();
    let msPerDay = 24 * 60 * 60 * 1000;
    let totalDays = (today - bDay) / msPerDay;
    totalDays = Math.round(totalDays);
    message.textContent = `A total of ${totalDays} has passed since your DOB`
    
    // below was left for reference
    console.log(totalDays);
    console.log(`the dob is ${new Date(bDay.getDate(),bDay.getMonth()+1,bDay.getFullYear())}`);
}
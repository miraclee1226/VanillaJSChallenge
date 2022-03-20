const clock = document.querySelector("h2#clock");
const dDate = document.querySelector("h3#Date");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getunderDate(){
    const underdate = new Date();
    const year = underdate.getFullYear();
    const month = underdate.getMonth() + 1;
    const date = underdate.getDate(); 
    dDate.innerText = `${year}/${month}/${date}`;
}

getClock();
setInterval(getClock, 1000);
getunderDate();


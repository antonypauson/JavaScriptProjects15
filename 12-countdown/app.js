const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//give away => date
//deadline => all elements
// items => each element

const giveAway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let myDate = new Date(2025, 8, 30, 12, 50, 15);
const month = months[myDate.getMonth()];
const day = weekdays[myDate.getDay()];

giveAway.textContent = `giveaway ends on ${day}, ${myDate.getDate()} ${month} ${myDate.getFullYear()} ${myDate.getHours()}:${myDate.getMinutes()}am` 

//future time
function getRemainingTime() {
    const futureTime = myDate.getTime();
    const currentTime = new Date().getTime();
    // console.log(futureTime, currentTime);
    return futureTime - currentTime; 
}

function yeah() {
    //how many milliseconds in one day
// 1s = 1000ms
// 1m = 60s
// 1hr = 60min
// 1day = 24hr

const oneDay = 24 * 60 * 60 * 1000;//ms in a day
const oneHour = oneDay / 24//ms in an hour
const oneMin = oneHour / 60//ms in a minute
const oneSec = oneMin / 60;//ms in a second
// console.log(oneHour);


const diffDays = Math.floor(getRemainingTime() / oneDay); 
const diffHours = Math.floor((getRemainingTime() % oneDay) / oneHour)
const diffMins = Math.floor((getRemainingTime() % oneHour) / oneMin)
const diffSecs = Math.floor((getRemainingTime() % oneMin) / oneSec)
// console.log(diffSecs);

const myArr = [diffDays, diffHours, diffMins, diffSecs];

items.forEach((item,index) => {
    item.innerHTML = format(myArr[index]);
})


}


function format(item) {
    if (item < 10) {
        return `0${item}`;
    } else {
        return item; 
    }
}

setInterval(yeah, 1000); 

 





const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector(".js-title");
const today = document.querySelector(".js-day"); 

function setDay(day) {
    const date = new Date();
    const num = date.getDay();
    const week = ["sun","mon","tue","wed","tur","fri","sat"];
    const toweek = week[num];
    
    return toweek;
}

function getTime() {
    const date = new Date();

    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour = date.getHours();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let toDate = date.getDate();
    let day = date.getDay();

    today.innerHTML=`${year}.${month}.${toDate}.${setDay(day)}`;

    clockTitle.innerHTML= `
    ${hour < 10 ? `0${hour}` : hour} : 
    ${min < 10 ? `0${min}` : min} : 
    ${sec < 10 ? `0${sec}` : sec}`;


}



function init() {
    getTime();
    setInterval(getTime,1000);
}

init()


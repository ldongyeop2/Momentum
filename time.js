const timebox = document.querySelector(".time");
const days =['Sun', 'Mon', 'Tue', 'Wed', 'Tur', 'Fri', 'Sat']

function whatTime(){
  const date = new Date();
  const sec = String(date.getSeconds()).padStart(2,"0"); // String이 가져야 하는 길이를 2로 설정, 그렇지 않으면 앞에 "0"을 추가
  const min = String(date.getMinutes()).padStart(2,"0");
  const hours = String(date.getHours()).padStart(2,"0");
  const th = date.getDate();
  const day = date.getDay();
  const month = date.getMonth();
  const years = date.getFullYear();

  timebox.innerText=`${years}. ${month+1}. ${th} ${days[day]} \n${hours} : ${min} : ${sec}`;
}

function init(){
  whatTime();
  setInterval(whatTime,1000);
}

init();


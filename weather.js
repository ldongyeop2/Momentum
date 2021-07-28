const API_KEY ="3e09a6cb2bbada3a873d5ed9809a18758";

function GeoSucces(position){
  const lat =position.coords.latitude;
  const lon =position.coords.longitude;
  const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json()).then(data => {
    const weatherBox = document.querySelector(".weather");
    const name = data.name;
    const weather = data.weather[0].main;
    const temp = data.main.temp;
    weatherBox.innerHTML=`${name} / ${weather} / ${temp}°C`;
  });
}

function GeoError() {
  alert("위치 정보를 읽을 수 없습니다.")
}

function init() {
  navigator.geolocation.getCurrentPosition(GeoSucces, GeoError);
}
init();

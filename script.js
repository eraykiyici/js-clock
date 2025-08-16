const Name = window.prompt("Adınızı ve Soyadınızı Giriniz"); 

let showName = document.getElementById("name"); 
if (showName) {
  showName.textContent = Name; 
}

const myClockDiv = document.getElementById("clock"); 

function updateClockAndDate() {
  const myTime = new Date(); 

  const myTimeType = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const showTime = myTime.toLocaleTimeString("tr-TR", myTimeType); 
  const showDayOptions = { weekday: "long" };
  const showDay = myTime.toLocaleDateString("tr-TR", showDayOptions);

  myClockDiv.innerHTML = `${showTime} ${showDay}`;
}

updateClockAndDate(); 
setInterval(updateClockAndDate, 1000);

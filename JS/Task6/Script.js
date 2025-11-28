const clockDiv = document.getElementById("clock");

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = "AM";
  if (hours >= 12) {
    ampm = "PM";
  }

  hours = hours % 12;
  if (hours === 0) {
    hours = 12;
  }

  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  const timeString = `${hh}:${mm}:${ss} ${ampm}`;

  clockDiv.innerText = timeString;
}

updateClock();

setInterval(updateClock, 1000);
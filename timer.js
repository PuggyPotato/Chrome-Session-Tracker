let timeSecond = document.getElementById("time-second");
let timeMinute = document.getElementById("time-min");
let text = document.getElementById("text");

function updateUI(seconds, minutes) {
  timeSecond.innerHTML = String(seconds).padStart(2, "0");
  timeMinute.innerHTML = String(minutes).padStart(2, "0");
  text.innerHTML = `You Have Been Using Chrome for ${minutes} Minute and ${seconds} Second This Session`;
}

setInterval(() => {
  chrome.storage.local.get(["seconds", "minutes"], (result) => {
    const second = result.seconds ?? 0;
    const minute = result.minutes ?? 0;
    updateUI(second, minute);
  });
}, 1000);

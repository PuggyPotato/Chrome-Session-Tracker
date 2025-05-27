let second = 0; 
let minute = 0; 

setInterval(() => {
  second++;
  if (second >= 60) {
    second = 0;
    minute += 1;
  }
  chrome.storage.local.set({ seconds: second, minutes: minute });
}, 1000);

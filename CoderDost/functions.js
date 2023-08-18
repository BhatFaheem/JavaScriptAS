let hourHand = document.querySelector('.hour');
let minHand = document.querySelector('.minute');
let secHand = document.querySelector('.second');

let ticking = function()
{
  let currDate = new Date();

  let getHour = currDate.getHours();
  let getMin = currDate.getMinutes();
  let getSec = currDate.getSeconds();

  hourHand.textContent = getHour;
  minHand.textContent = getMin;
  secHand.textContent = getSec;
}
// console.log("kjvnk");
setInterval(ticking , 1000);
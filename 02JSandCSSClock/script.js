// Create references to the HTML elements that we want to transform
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  /* Due to there is a glitch that occurs at every 0th second and our transition is set at 0.05s. 
  When hand transition from final state to initial state, because the number of degrees reduce, 
  the hand makes a (reverse) anti-clockwise motion to reach the 0 degree mark, so we'll see it occurs.

  To bypass it, we remove the transition property at the specified degrees (where glitch occurs) via JavaScript.*/
  if (secondsDegrees === 90) secondHand.style.transition = "all 0s";
  else secondHand.style.transition = "all 0.05s";

  if (minsDegrees === 90) minHand.style.transition = "all 0s";
  else minHand.style.transition = "all 0.1s";
}

setInterval(setDate, 1000);

setDate();

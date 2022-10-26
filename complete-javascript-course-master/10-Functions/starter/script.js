'use strict';

const flight = 'Lh123';
const zanhua = {
  name: 'chenzanhua',
  passport: 3546565445,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 3546565445) {
    alert('check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, zanhua);
console.log(flight);
console.log(zanhua);

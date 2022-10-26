'strict mode';
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendingLimits.jay = 200;
// console.log(spendingLimits);
const addExpence = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();
  // const limit = spendingLimits?.[user] ??  0 ;
  const limit = spendingLimits[cleanUser] ? spendingLimits[cleanUser] : 0;

  if (value <= limit) {
    return [
      ...state,
      { value: -value, description: description, user: cleanUser },
    ];
  } else {
    return [...state];
  }
};
const newBugget1 = addExpence(budget, spendingLimits, 200, 'Pizza 🍕');
const newBugget2 = addExpence(
  newBugget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBugget3 = addExpence(newBugget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log('.................');
console.log(newBugget1);
console.log(newBugget2);
console.log(newBugget3);

const checkExpenses = function () {
  for (const entry of newBugget3) {
    const limit = spendingLimits[entry.user] ? spendingLimits[entry.user] : 0;
    if (entry.value < -limit) {
      entry.flag = 'limit';
    }
  }
};
checkExpenses();
console.log(newBugget3);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  console.log(bigExpenses);

  // let output = '';
  // for (const el of newBugget3) {
  //   output +=
  //     el.value <= -bigLimit ? `${el.description.slice(-2) + ' / '}` : '';
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

logBigExpenses(newBugget3, 100);

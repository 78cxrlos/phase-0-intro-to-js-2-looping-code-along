// Code your solutions in this file
function writeCards(names, eventName) {
  let message = [];

  for (let i = 0; i < names.length; i++) {
    let result = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    message.push(result);
  }

  return message;
}

const result = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(result);

function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }

  countDown(10);

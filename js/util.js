const createId = (id) => function () {
  return ++id;
};

const generateId = createId(0);
const generateIdPhoto = createId(0);
const generateIdMessage = createId(0);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomMessage = (message) => {
  if (Math.round(Math.random()) === 0) {
    return message[Math.round(Math.abs(Math.random() * message.length - 1))];
  } else {
    return `${message[Math.round(Math.abs(Math.random() * message.length - 1))]} ${message[Math.round(Math.abs(Math.random() * message.length - 1))]}`;
  }
};

const getRandom = (elment) => elment[Math.round(Math.abs(Math.random() * elment.length - 1))];

export {generateId, generateIdPhoto, generateIdMessage, getRandomInt,getRandomMessage, getRandom};

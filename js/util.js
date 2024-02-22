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

const createRandomMessage = (message) => message[Math.round(Math.abs(Math.random() * message.length - 1))];

const getRandomMessage = (message) => {
  if (Math.round(Math.random()) === 0) {
    return createRandomMessage(message);
  } else {
    return `${createRandomMessage(message)} ${createRandomMessage(message)}`;
  }
};

const getRandom = (element) => element[Math.round(Math.abs(Math.random() * element.length - 1))];

export {generateId, generateIdPhoto, generateIdMessage, getRandomInt,getRandomMessage, getRandom};

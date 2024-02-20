const checkStr = (str, maxLength) => str.length <= maxLength;
checkStr('проверяемая строка', 20);

const palindrome = (str) => (str.replace(/\s/g,'').split('').reverse().join('')).toLowerCase() === (str.replace(/\s/g,'')).toLowerCase();
palindrome('ДовОд');

const getNumber = (item) => (/\d/g.test(item)) ? parseInt(item.toString().match(/\d/g).join(''), 10) : NaN;
getNumber('агент 007');

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

const getRandomMessage = (message) => (Math.round(Math.random()) === 0 ? message[Math.round(Math.abs(Math.random() * message.length - 1))] : `${message[Math.round(Math.abs(Math.random() * message.length - 1))]} ${message[Math.round(Math.abs(Math.random() * message.length - 1))]}`);

const getRandom = (elment) => elment[Math.round(Math.abs(Math.random() * elment.length - 1))];

export {generateId, generateIdPhoto, generateIdMessage, getRandomInt,getRandomMessage, getRandom};

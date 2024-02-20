const NAMES = [
  'Абобус',
  'Франческо',
  'Иван',
  'Хуан',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const createId = (id) => function () {
  return id++;
};

const generateId = createId(0);
const generateIdPhoto = createId(0);
const generateIdMessage = createId(0);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomMessage = () => (Math.round(Math.random()) === 0 ? MESSAGE[Math.round(Math.abs(Math.random() * MESSAGE.length - 1))] : `${MESSAGE[Math.round(Math.abs(Math.random() * MESSAGE.length - 1))]} ${MESSAGE[Math.round(Math.abs(Math.random() * MESSAGE.length - 1))]}`);

const getRandomName = () => NAMES[Math.round(Math.abs(Math.random() * NAMES.length - 1))];

const createUser = () => (
  [{
    id: generateId(),
    url: `photos/${generateIdPhoto()}.jpg`,
    description: 'Some kind of text',
    likes: getRandomInt(15, 200),
    comments: [{
      id: getRandomInt(generateIdMessage(), 200),
      avatar: `'img/avatar-${getRandomInt(1, 6)}.svg'`,
      message: getRandomMessage(),
      name: getRandomName(),
    }]
  }]
);
createUser();

//const similarUser = Array.from({length: 25}, createUser);
//console.log(similarUser);

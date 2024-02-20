const NAMES = ['Абобус', 'Франческо', 'Иван', 'Хуан', 'Себастьян', 'Мария', 'Вашингтон'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Сомнительно, но окэй.',
  'Мы любим такие формы, форматы.',
  'Я это не понимаю, мне это не интересно, вот мне лично это не интересно, за других сказать не могу.',
  'Круто! Да этож круто!',
  'Это печально.',
  'У кого-то это щелкает, а у кого-то не щелкает...'
];

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

const getRandomMessage = () => (Math.round(Math.random()) === 0 ? MESSAGES[Math.round(Math.abs(Math.random() * MESSAGES.length - 1))] : `${MESSAGES[Math.round(Math.abs(Math.random() * MESSAGES.length - 1))]} ${MESSAGES[Math.round(Math.abs(Math.random() * MESSAGES.length - 1))]}`);

const getRandom = (elment) => elment[Math.round(Math.abs(Math.random() * elment.length - 1))];

const createUser = () => (
  [{
    id: generateId(),
    url: `photos/${generateIdPhoto()}.jpg`,
    description: getRandom(DESCRIPTIONS),
    likes: getRandomInt(15, 200),
    comments: [{
      id: getRandomInt(generateIdMessage(), 200),
      avatar: `'img/avatar-${getRandomInt(1, 6)}.svg'`,
      message: getRandomMessage(),
      name: getRandom(NAMES),
    }]
  }]
);

// Привет, Андрей. Эту строку нужно будет удалить при проверке. Я её добавил, чтобы eslint не ворчал)
createUser();

//const similarUser = Array.from({length: 25}, createUser);
//console.log(similarUser);

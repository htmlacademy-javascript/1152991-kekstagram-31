import {generateId, generateIdPhoto, generateIdMessage, getRandomInt,getRandomMessage, getRandom} from './util.js';

const NAMES = ['Абобус', 'Франческо', 'Иван', 'Хуан', 'Себастьян', 'Мария', 'Вашингтон'];

const MESSAGES = [
  'Сомнительно, но окэй.',
  'Мы любим такие формы, форматы.',
  'Я это не понимаю, мне это не интересно, вот мне лично это не интересно, за других сказать не могу.',
  'Круто! Да этож круто!',
  'Это печально.',
  'У кого-то это щелкает, а у кого-то не щелкает...'
];

const DESCRIPTIONS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const createUser = () => (
  {
    id: generateId(),
    url: `photos/${generateIdPhoto()}.jpg`,
    description: getRandom(DESCRIPTIONS),
    likes: getRandomInt(15, 200),
    comments: Array.from({length: getRandomInt(0, 30)}, () => ({
      id: getRandomInt(generateIdMessage(), 200),
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: getRandomMessage(MESSAGES),
      name: getRandom(NAMES),
    }))
  }
);

const similarUser = (count) => Array.from({length: count}, createUser);

export {similarUser};

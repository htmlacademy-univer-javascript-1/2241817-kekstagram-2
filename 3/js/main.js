/* eslint-disable no-unused-vars */
function getCommSize (comm, maxSize) {
  if (comm <= maxSize) {
    return true;
  }
  return false;
}

function getRandom (min, max) {
  return Math.random()*(max-min)+min;
}

function getRandomUniq(min, max){
  const numReserve = [];
  while (numReserve.length < max) {
    const randomNumber = Math.ceil(Math.random() * (max - min) + min);
    let found = false;
    for (let i = 0; i < numReserve.length; i++) {
      if (numReserve[i] === randomNumber){
        found = true;
        break;
      }
    }
    if (!found) { numReserve[numReserve.length]=randomNumber; }
  }
}

function getStringFromArr (Arr) {
  const i = getRandom(0,Arr.length);
  return(Arr[i]);
}

const nameArr = [
  'Аарон', 'Август', 'Анна', 'Мария', 'Ева', 'Авдотья', 'Саша', 'Дарья', 'Михаил'
];

const commentMessage = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. ',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. ',
  'Как можно было поймать такой неудачный момент?!'
];

const commentDescription = [
  'Зачем нужны внешние системы комментирования',
  'Комментарии и их влияние на SEO',
  'Какие альтернативные системы комментирования можно использовать на сайте',
  'Читайте нас в Telegram',
  'Чтобы обсудить публикацию на сайте под управлением WordPress со штатной системой комментирования и стандартными настройками, вам придется вручную указать имя и адрес электронной почты',
  'Сторонние сервисы комментирования обеспечивают следующие возможности'
];

const createComment = {
  id: getRandomUniq(0,1000),
  avatar: `img/avatar-+${getRandomUniq(1,1000)}.svg`,
  message: getStringFromArr(commentMessage),
  name: getStringFromArr(nameArr)
};

const photoDescription = {
  id: getRandomUniq(1,26),
  url: `photos/id${getRandomUniq(1,26)}.jpg`,
  description: getStringFromArr(commentDescription),
  likes: getRandom(15,200),
  comments: Array.from({lenght: 9,createComment})
};

function getNewPhoto (size) {
  return Array.from({lenght: size,photoDescription});
}

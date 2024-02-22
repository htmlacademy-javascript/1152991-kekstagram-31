const checkStr = (str, maxLength) => str.length <= maxLength;
checkStr(); // Написал чтобы eslint не ворчал, эту строку нужно будет удалить это не входит в мой код)

const checkPalindrome = (str) => (str.replace(/\s/g,'').split('').reverse().join('')).toLowerCase() === (str.replace(/\s/g,'')).toLowerCase();
checkPalindrome(); // Написал чтобы eslint не ворчал, эту строку нужно будет удалить это не входит в мой код)

const getNumber = (item) => (/\d/g.test(item)) ? parseInt(item.toString().match(/\d/g).join(''), 10) : NaN;
getNumber(); // Написал чтобы eslint не ворчал, эту строку нужно будет удалить это не входит в мой код)


const addZero = (time) => {
  if (time.length === 3) {
    return `0${time[0]}:0${time[2]}`;
  }

  const arr = time.split('');

  if (arr[1] === ':') {
    return `0${time}`;
  } else if (arr[2] === ':') {
    return `${time.slice(0,3)}0${time[3]}`;
  }

};

const getTimeFromMins = (mins) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;

  return `${hours }:${ minutes}`;
};

const getTime = (startMeeting, time) => {
  const hours = +startMeeting.slice(0, 2) + parseInt(time.slice(0,2), 10);
  const minutes = +startMeeting.slice(3, 5) + +time.slice(3, 5);

  return `${hours}:${minutes}`;
};

const checkTime = (startDay, endDay, startMeeting, duration) => {
  if (addZero(startMeeting) >= addZero(startDay) && addZero(startMeeting) <= addZero(endDay)) {
    const time = addZero(getTimeFromMins(duration));
    if (getTime(addZero(startMeeting), time) > addZero(startDay) && getTime(addZero(startMeeting), time) < addZero(endDay)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

checkTime(); // Это нужно будет удалить)

//console.log(checkTime('08:00', '17:30', '14:00', 90)); // true
//console.log(checkTime('8:0', '10:0', '8:0', 120)); // true
//console.log(checkTime('14:00', '17:30', '08:0', 90)); // false
//console.log(checkTime('8:00', '17:30', '08:00', 900)); // false

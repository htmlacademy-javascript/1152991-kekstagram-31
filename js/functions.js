const checkStr = (str, maxLength) => str.length <= maxLength;
checkStr('проверяемая строка', 20);

const palindrome = (str) => (str.replace(/\s/g,'').split('').reverse().join('')).toLowerCase() === (str.replace(/\s/g,'')).toLowerCase();
palindrome('ДовОд');

const getNumber = (item) => (/\d/g.test(item)) ? parseInt(item.toString().match(/\d/g).join(''), 10) : NaN;
getNumber('агент 007');

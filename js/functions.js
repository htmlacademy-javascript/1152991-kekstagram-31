const checkStr = (str, maxLength) => str.length <= maxLength;

const palindrome = (str) => (str.replace(/\s/g,'').split('').reverse().join('')).toLowerCase() === (str.replace(/\s/g,'')).toLowerCase();

const getNumber = (item) => (/\d/g.test(item)) ? parseInt(item.toString().match(/\d/g).join('')) : NaN;

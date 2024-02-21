const checkStr = (str, maxLength) => str.length <= maxLength;
checkStr(); // Написал чтобы eslint не ворчал, эту строку нужно будет удалить это не входит в мой код)

const palindrome = (str) => (str.replace(/\s/g,'').split('').reverse().join('')).toLowerCase() === (str.replace(/\s/g,'')).toLowerCase();
palindrome(); // Написал чтобы eslint не ворчал, эту строку нужно будет удалить это не входит в мой код)

const getNumber = (item) => (/\d/g.test(item)) ? parseInt(item.toString().match(/\d/g).join(''), 10) : NaN;
getNumber(); // Написал чтобы eslint не ворчал, эту строку нужно будет удалить это не входит в мой код)

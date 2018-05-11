/*  
  На основе предложенной функции сделайте 
  IIFE функцию с передачей аргументов ('5:15','20:45')
*/

const result = (function getLengthOfDay(sunrise, sunset) {
  
  const minutesToString = (minutes) => 
    `${Math.trunc(minutes / 60)}:${minutes % 60}`;
  
  const toMinutes = (str) => {
    const tmp = str.split(':');
    return Math.trunc(+tmp[0]) * 60 + +tmp[1];
  };
  
  return minutesToString(toMinutes(sunset) - toMinutes(sunrise));
}('5:15', '20:45'));

console.log(result); // "15:30"
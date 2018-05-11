/*  
  Расставьте отсутствующие .call 
*/

const getBreakpoints = function() {
  return `Sunrise: ${this.sunrise} Sunset: ${this.sunset}`;
};

const getLength = function() {
  
  const toMinutes = str => {
    const tmp = str.split(":");
    return Math.trunc(+tmp[0]) * 60 + +tmp[1];
  };

  const minutesToString = minutes => {
    return `${Math.trunc(minutes / 60)}:${minutes % 60}`;
  };

  return `Length of day: ${minutesToString(
    toMinutes(this.sunset) - toMinutes(this.sunrise)
  )}`;
};

function Day(sunrise, sunset) {
  this.sunrise = sunrise;
  this.sunset = sunset;
}

const today = new Day("6:15", "20:45");
// .call
console.log(getBreakpoints.call(today)); // "Sunrise: 6:15  Sunset: 20:45"

function DaysLongitude(sunrise, sunset) {
  this.sunrise = sunrise;
  this.sunset = sunset;
}

const todaySunsDay = new DaysLongitude("6:15", "20:45");
// call.
console.log(getLength.call(todaySunsDay)); // "Length of day: 14:30"
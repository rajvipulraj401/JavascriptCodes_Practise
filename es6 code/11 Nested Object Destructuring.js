const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

const {today :{low:lowToday , high:highToday}} = LOCAL_FORECAST;
// even when we do destructuring of nested object or when we use new name for the object property we use colon but when we deal with nested object we do (: {} AND then we go inside object inside of object like this)

// console.log( lowToday)
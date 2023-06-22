const addZero = time => time < 10 ? `0${time}` : time;

export const getCurrentTime = () => {
  const months = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
  ];

  const weekDays = [
    'воскресенье',
    'понедельни',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];

  const date = new Date();
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const dayOfWeek = weekDays[date.getDay()];
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());

  return { year, month, dayOfMonth, dayOfWeek, hours, minutes };
};

export const getWindDirection = (deg) => {
  const directions = [
    '&#8593;',
    '&#8598;',
    '&#8592;',
    '&#8601;',
    '&#8595;',
    '&#8600;',
    '&#8594;',
    '&#8599;',
  ];

  const i = Math.round(deg / 45) % 8;

  return directions[i];
};

export const calculateDewPoint = (temp, humidity) => {
  const a = 17.27;
  const b = 237.7;

  // ft - f(temp, humadity)
  const ft = (a * temp) / (b + temp) + Math.log(humidity / 100);
  // dewPoint - температура точки росы
  const dewPoint = (b * ft) / (a - ft);

  return dewPoint.toFixed(1);
};

export const calculatePressure = (pressure) => {
  const mmHg = pressure * 0.750063755419211;

  return mmHg.toFixed(2);
};

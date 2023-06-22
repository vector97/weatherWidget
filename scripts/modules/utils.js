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

  const weekdays = [
    'воскресенье',
    'понедельник',
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
  const dayOfWeek = weekdays[date.getDay()];
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

export const getWeatherForecastData = (data) => {
  const forecast = data.list.filter(
    item =>
      new Date(item.dt_txt).getHours() === 12 &&
      new Date(item.dt_txt).getDate() > new Date().getDate()
  );

  const forecastData = forecast.map(item => {
    const date = new Date(item.dt_txt);
    const weekdaysShort = [
      'вс',
      'пн',
      'вт',
      'ср',
      'чт',
      'пт',
      'сб',
    ];

    const dayOfWeek = weekdaysShort[date.getDay()]

    const weatherIcon = item.weather[0].icon;

    let minTemp = Infinity;
    let maxTemp = -Infinity;

    for (let i = 0; i < data.list.length; i++) {
      const temp = data.list[i].main.temp;
      const tempDate = new Date(data.list[i].dt_txt);

      if (tempDate.getDate() === date.getDate()) {
        if (temp < minTemp) {
          minTemp = temp;
        } else {
          maxTemp = temp;
        }
      }
    }

    return {
      dayOfWeek,
      weatherIcon,
      minTemp,
      maxTemp,
    }
  });

  return forecastData;
};

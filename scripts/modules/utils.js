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

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
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return { year, month, dayOfMonth, dayOfWeek, hours, minutes };
};

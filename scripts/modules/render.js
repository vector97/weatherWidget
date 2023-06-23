import { calculateDewPoint, calculatePressure, getCurrentTime, getWeatherForecastData } from './utils.js';

export const renderWidgetToday = (widget, data) => {
  const { year, month, dayOfMonth, dayOfWeek, hours, minutes } = getCurrentTime();
  const {
    weather: [{ icon }],
    name,
    main: { temp, feels_like: feelsLike }
  } = data;

  widget.insertAdjacentHTML(
    'beforeend',
    `
      <div class="widget__today">
        <div class="widget__date-block">
          <p class="widget__date">${dayOfMonth} ${month} ${year}</p>
          <p class="widget__time">${hours}:${minutes}</p>
          <p class="widget__day">${dayOfWeek}</p>
        </div>
        <div class="widget__icon">
          <img class="widget__img" src="./icon/${icon}.svg" alt="Погода">
        </div>
        <div class="widget__wheather">
          <div class="widget__city">
            <p>${name}</p>
            <button class="widget__change-city" aria-label="Изменить город"></button>
          </div>
          <p class="widget__temp-big">${temp}°C</p>
          <p class="widget__felt">ощущается</p>
          <p class="widget__temp-small">${feelsLike} °C</p>
        </div>
      </div>
    `
  );
};

export const renderWidgetOther = (widget, data) => {
  const {
    wind: { speed, deg },
    main: { humidity, pressure, temp }
  } = data;

  widget.insertAdjacentHTML(
    'beforeend',
    `
      <div class="widget__other">
        <div class="widget__wind">
          <p class="widget__wind-title">Ветер</p>
          <p class="widget__wind-speed">${speed} м/с</p>
          <p class="widget__wind-text" style="transform: rotate(${deg}deg)">&#8595;</p>

        </div>
        <div class="widget__humidity">
          <p class="widget__humidity-title">Влажность</p>
          <p class="widget__humidity-value">${humidity}%</p>
          <p class="widget__humidity-text">Т.Р: ${calculateDewPoint(temp, humidity)} °C</p>
        </div>

        <div class="widget__pressure">
          <p class="widget__pressure-title">Давление</p>
          <p class="widget__pressure-value">${calculatePressure(pressure)}</p>
          <p class="widget__pressure-text">мм рт.ст.</p>
        </div>
      </div>
    `
  );
};

export const renderWidgetForecast = (widget, data) => {
  const widgetForecast = document.createElement('ul');
  widgetForecast.className = 'widget__forecast';
  widget.append(widgetForecast);

  const forecastData = getWeatherForecastData(data);

  const items = forecastData.map((item) => {
    const widgetDayItem = document.createElement('li');
    widgetDayItem.className = 'widget__day-text';

    widgetDayItem.insertAdjacentHTML('beforeend', `
      <li class="widget__day-item">
        <p class="widget__day-text">${item.dayOfWeek}</p>
        <img class="widget__day-img" src="./icon/${item.weatherIcon}.svg" alt="Погода">
        <p class="widget__day-temp">${item.minTemp}°/${item.maxTemp}°</p>
      </li>
    `);

    return widgetDayItem;
  });

  widgetForecast.append(...items)
};

export const renderError = (widget, error) => {
  widget.textContent = error.toString();
  widget.classList.add('widget_error');
};

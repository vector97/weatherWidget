import { fetchForecast, fetchWeather } from './APIService.js';
import {
  renderError,
  renderWidgetForecast,
  renderWidgetOther,
  renderWidgetToday,
} from './render.js';

export const startWidget = async () => {
  const city = 'Астрахань';

  const widget = document.createElement('div');
  widget.className = 'widget';

  const dataWeather = await fetchWeather(city);

  if (dataWeather.success) {
    renderWidgetToday(widget, dataWeather.data);
    renderWidgetOther(widget, dataWeather.data);
  } else {
    renderError(widget, dataWeather.error);
  }

  const dataForecast = await fetchForecast(city);

  if (dataForecast.success) {
    renderWidgetForecast(widget, dataForecast.data);
  } else {
    renderError(widget, dataForecast.error);
  }

  return widget;
};

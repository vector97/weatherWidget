import { fetchWeather } from './APIService.js';
import {
  renderError,
  renderWidgetForecast,
  renderWidgetOther,
  renderWidgetToday,
} from './render.js';

export const startWidget = async () => {
  const widget = document.createElement('div');
  widget.className = 'widget';

  const dataWeather = await fetchWeather('Астрахань');

  if (dataWeather.success) {
    renderWidgetToday(widget, dataWeather.data);
    renderWidgetOther(widget, dataWeather.data);
  } else {
    renderError(widget);
  }

  renderWidgetForecast(widget);

  return widget;
};

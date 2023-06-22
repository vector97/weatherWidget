const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '95bcdad394f057f17a92aa373d9a7b85';

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru&units=metric`);
    if (!response.ok) {
      throw new Error('Ошибка запроса');
    }
    const data = await response.json();
    return { success: true, data }
  } catch (err) {
    return { success: false, err }
  }
};

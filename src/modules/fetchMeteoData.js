export default async function fetchMeteoDataByLocation(
  location = 'bergamo',
  callback,
  unit = 'kelvin'
) {
  try {
    const API_KEY = 'f85db4f81e9fe36af88d71da420865f0';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`;
    const loading = document.querySelector('.loading');
    loading.classList.add('active');
    const apiResponse = await fetch(API_URL);
    const apiData = await apiResponse.json();
    loading.classList.remove('active');
    callback(apiData, unit);
  } catch (e) {
    console.error(e);
  }
}

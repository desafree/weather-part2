import '../style.scss';
import fetchMeteoDataByLocation from './modules/fetchMeteoData';
import { Display } from './modules/Display';

fetchMeteoDataByLocation('bergamo', Display.updateContent);

const unit = document.querySelector('.unit');
unit.addEventListener('click', () => {
  if (unit.textContent == 'kelvin') {
    unit.textContent = 'celsius';
  } else if (unit.textContent == 'celsius') {
    unit.textContent = 'kelvin';
  }
  const city = document.querySelector('.city');
  fetchMeteoDataByLocation(
    city.textContent,
    Display.updateContent,
    unit.textContent
  );
});

const formLocation = document.querySelector('form');
formLocation.addEventListener('submit', (e) => {
  e.preventDefault();
  fetchMeteoDataByLocation(
    formLocation.city.value,
    Display.updateContent,
    unit.textContent
  );
  formLocation.reset();
});

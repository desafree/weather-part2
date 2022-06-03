export const Display = (function () {
  const meteoContainer = document.querySelector('.meteo-container');
  let unitGrade = 'kelvin';

  return { removeContent, updateContent };

  function removeContent() {
    meteoContainer.textContent = '';
  }

  function updateContent(
    {
      main: { temp, humidity: humidityValue, feels_like: fellsLike },
      wind: { speed },
      name,
      weather: [{ main: weather }],
    },
    unit = 'kelvin'
  ) {
    if (
      weather == 'Drizzle' ||
      weather == 'Thunderstorm' ||
      weather == 'Rain' ||
      weather == 'Snow'
    ) {
      document.documentElement.style.setProperty('--font-color', '#dbdffd');
      document.documentElement.style.setProperty('--header-color', '#9ba3eb');
      document.documentElement.style.setProperty(
        '--container-color',
        '#646fd4'
      );
      document.documentElement.style.setProperty(
        '--background-color',
        '#242f9b'
      );
    } else if (weather == 'Clear') {
      document.documentElement.style.setProperty('--font-color', '#D49B54');
      document.documentElement.style.setProperty('--header-color', '#C74B50');
      document.documentElement.style.setProperty(
        '--container-color',
        '#712B75'
      );
      document.documentElement.style.setProperty(
        '--background-color',
        '#46244C'
      );
    } else {
      document.documentElement.style.setProperty('--font-color', '#E5DCC3');
      document.documentElement.style.setProperty('--header-color', '#C7BEA2');
      document.documentElement.style.setProperty(
        '--container-color',
        '#AAA492'
      );
      document.documentElement.style.setProperty(
        '--background-color',
        '#9A9483'
      );
    }
    removeContent();
    const city = document.createElement('h2');
    city.classList.add('city');
    city.textContent = name;
    meteoContainer.appendChild(city);

    const grade = document.createElement('h3');
    grade.classList.add('grade');
    if (unit == 'kelvin') {
      grade.textContent = temp + ' K';
    } else if (unit == 'celsius') {
      grade.textContent = `${Math.ceil(temp - 273.15)} C`;
    }

    meteoContainer.appendChild(grade);

    const humidityContainer = document.createElement('h4');
    humidityContainer.textContent = 'Humidity: ';
    const humidity = document.createElement('span');
    humidity.classList.add('humidity');
    humidity.textContent = humidityValue + '%';
    humidityContainer.appendChild(humidity);
    meteoContainer.appendChild(humidityContainer);

    const fellContainer = document.createElement('h4');
    fellContainer.textContent = 'Feels like: ';
    const fell = document.createElement('span');
    fell.classList.add('feel-grade');
    if (unit == 'kelvin') {
      fell.textContent = fellsLike + ' K';
    } else if (unit == 'celsius') {
      fell.textContent = `${Math.ceil(fellsLike - 273.15)} C`;
    }
    fellContainer.appendChild(fell);
    meteoContainer.appendChild(fellContainer);

    const windContainer = document.createElement('h4');
    windContainer.textContent = 'Wind: ';
    const wind = document.createElement('span');
    wind.classList.add('wind');
    wind.textContent = speed + ' km/h';
    windContainer.appendChild(wind);
    meteoContainer.appendChild(windContainer);
  }
})();

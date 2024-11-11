export async function getWeatherByCity(city, days) {
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=${days}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "8cf25e49c2msh10f70723eee405fp1d8724jsn1d0e23440104",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    if (result.cod === "404") {
      throw new Error("City not found");
    }

    return result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
}

export async function getWeatherInfo(city = "Minsk", days = 1) {
  const data = await getWeatherByCity(city, days);

  if (data) {
    const $city = document.querySelector(".city");
    $city.textContent = `City: ${data.location.name}`;

    const $country = document.querySelector(".country");
    $country.textContent = `Country: ${data.location.country}`;

    const $temp = document.querySelector(".temp");
    $temp.textContent = `Temperature: ${data.current.temp_c}C`;

    const $description = document.querySelector(".desc");
    $description.textContent = `Description: ${data.current.condition.text}`;

    const $weatherInfo = document.querySelector(".weatherInfo");
    $weatherInfo.classList.add("show");
  }
}

const key = "UEue0XPApiXkXvk3GqLgDhD6e8KJhimL";

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  if (response.status !== 200) {
    throw new Error("Resource Not Found");
  }

  const data = await response.json();
  return data[0];
};

const getWeather = async (id) => {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/${id}`;
  const query = `?apikey=${key}`;

  const response = await fetch(base + query);
  if (response.status !== 200) {
    throw new Error("Resource Not Found");
  }

  const data = await response.json();
  return data[0];
};

getCity("Mumbai")
  .then((data) => {
    console.log(data);
    return getWeather(data.Key);
  })
  .then((weather) => {
    console.log(weather);
  })
  .catch((err) => console.log(err));

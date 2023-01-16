const submitBtn = document.getElementById("submitBtn");
const input = document.getElementById("myInput");
const cityName = document.getElementsByClassName("city")[0];
const temp = document.getElementsByClassName("dgree")[0];
let img = document.getElementById("icon");
let weather = document.getElementById("weather");

// img.src = "https://openweathermap.org/img/wn/01d@2x.png";
const getInfo = (e) => {
  e.preventDefault();
  const city = input.value;
  fetchData(city);
};

const fetchData = async (city) => {
  if (city === "") {
    return (cityName.innerText = "search bar is empty");
  }

  try {
    const rawData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=76adbcf5e15b71b284fad8cd31d9a649&units=metric`
    );
    const data = await rawData.json();
    cityName.innerText = data.name;
    temp.innerText = data.main.temp;
    let icon = data.weather[0].icon;
    img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weather.innerText = data.weather[0].description;
  } catch (error) {
    alert("please tell me is data is not showing");
    console.log(error);
  }
};

submitBtn.addEventListener("click", getInfo);


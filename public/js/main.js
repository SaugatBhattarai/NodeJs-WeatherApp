const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");
const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `Please Enter Valid City name.`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=fc18109227d7f37d624c1237c6a13e4f`;
      const response = await fetch(url);
      const data = await response.json();
      const arraydata = [data];

      city_name.innerText = `${arraydata[0].name},${arraydata[0].sys.country}`;
      temp_real_val.innerText = arraydata[0].main.temp;
      tempStatus = arraydata[0].weather[0].main;

      if (tempStatus === "Sunny") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68'></i>";
      } else if (tempStatus == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
      } else if (tempStatus == "Rainy") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
      } else if (tempStatus === "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68;'></i>";
      }
      datahide.classList.remove("data_hide");
    } catch {
      city_name.innerText = `Please enter the city name properly.`;
      datahide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);

// Get current date and day ===================================
const day = document.getElementById("day");
const today_date = document.getElementById("today_date");

const getCurrentDay = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];
  return day;
};

const getMonthsDate = () => {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const d = new Date();
  let month = months[d.getMonth()];
  let date = d.getDate();
  return `${month} ${date}`;
};

day.innerText = getCurrentDay();

today_date.innerText = getMonthsDate();

// Date and Date Ends here ==================================================

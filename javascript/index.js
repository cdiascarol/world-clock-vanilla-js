function updateTime() {
  // Los Angeles
  let dublinElement = document.querySelector("#dublin");
  if (dublinElement) {
    let dublinDateElement = dublinElement.querySelector(".timezone-list-date");
    let dublinTimeElement = dublinElement.querySelector(".timezone-list-time");
    let dublinTimeOffsetElement =
      dublinElement.querySelector(".timezone-list-dif");
    let dublinTime = moment().tz("Europe/Dublin");

    dublinDateElement.innerHTML = dublinTime.format("L");
    dublinTimeElement.innerHTML = dublinTime.format("hh:mm A");
    dublinTimeOffsetElement.innerHTML = `UTC ${dublinTime.format("Z")}`;
  }

  // Paris
  let barcelonaElement = document.querySelector("#barcelona");
  if (barcelonaElement) {
    let barcelonaDateElement = barcelonaElement.querySelector(
      ".timezone-list-date"
    );
    let barcelonaTimeElement = barcelonaElement.querySelector(
      ".timezone-list-time"
    );
    let barcelonaTimeOffsetElement =
      barcelonaElement.querySelector(".timezone-list-dif");
    let barcelonaTime = moment().tz("Europe/Barcelona");

    barcelonaDateElement.innerHTML = barcelonaTime.format("L");
    barcelonaTimeElement.innerHTML = barcelonaTime.format("hh:mm A");
    barcelonaTimeOffsetElement.innerHTML = `UTC ${barcelonaTime.format("Z")}`;
  }

  // Montreal
  let montrealElement = document.querySelector("#montreal");
  if (montrealElement) {
    let montrealDateElement = montrealElement.querySelector(
      ".main-timezone-date"
    );
    let montrealTimeElement = montrealElement.querySelector(
      ".main-timezone-time"
    );
    let montrealTime = moment().tz("America/Montreal");

    montrealDateElement.innerHTML = montrealTime.format("[UTC] Z dddd, L");
    montrealTimeElement.innerHTML = montrealTime.format("hh:mm A");
  }
  const secondHand = document.querySelector(".second-hand");
  const minsHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="row timezone-list-city">
<div class="col-6">
                <h2>${cityName}</h2>
                <div class="timezone-list-dif"> UTC ${cityTime.format(
                  "Z"
                )}</div>
              </div>
              <div class="col-6">
                <div class="timezone-list-time">${cityTime.format("L")}</div>
                <div class="timezone-list-date">${cityTime.format(
                  "hh:mm A"
                )}</div>
              </div>
  </div>
  `;
}

// //analog clock
// const secondHand = document.querySelector(".second-hand");
// const minsHand = document.querySelector(".min-hand");
// const hourHand = document.querySelector(".hour-hand");

// function setDate() {
//   const now = new Date();

//   const seconds = now.getSeconds();
//   const secondsDegrees = (seconds / 60) * 360 + 90;
//   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//   const mins = now.getMinutes();
//   const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
//   minsHand.style.transform = `rotate(${minsDegrees}deg)`;

//   const hour = now.getHours();
//   const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
//   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
// }

// setInterval(setDate, 1000);

// setDate();

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

function updateTime() {
  // Los Angeles
  let dublinElement = document.querySelector("#dublin");
  if (dublinElement) {
    let dublinDateElement = dublinElement.querySelector(".timezone-list-date");
    let dublinTimeElement = dublinElement.querySelector(".timezone-list-time");
    let dublinTime = moment().tz("Europe/Dublin");

    dublinDateElement.innerHTML = dublinTime.format("L");
    dublinTimeElement.innerHTML = dublinTime.format("hh:mm A");
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
    let barcelonaTime = moment().tz("Europe/Barcelona");

    barcelonaDateElement.innerHTML = barcelonaTime.format("L");
    barcelonaTimeElement.innerHTML = barcelonaTime.format("hh:mm A");
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

    montrealDateElement.innerHTML = montrealTime.format("dddd, L");
    montrealTimeElement.innerHTML = montrealTime.format("hh:mm A");
  }
}

updateTime();
setInterval(updateTime, 1000);

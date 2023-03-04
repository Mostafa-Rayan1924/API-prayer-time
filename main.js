// variables
let popup = document.querySelector(".popup");
let cityName = document.getElementById("cityName");
let datingDay = document.querySelector(".day");
let date = document.querySelector(".date");
let countrySearch = document.querySelector(".country");
let citySearch = document.querySelector(".city");
let send = document.querySelector(".send");
// end of vars

// show info
document.querySelector(".info").addEventListener("click", (e) => {
  popup.classList.add("show");
});
document.querySelector(".close").addEventListener("click", () => {
  popup.classList.remove("show");
});

// end of show info

// showing the current date
let dayDate = new Date();
let nameDay = dayDate.toString().slice(0, 4);
let year = dayDate.getFullYear();
let day = dayDate.getDate();
let month = dayDate.getMonth();
datingDay.innerHTML = nameDay;
date.innerHTML = `${year} / ${month + 1} / ${day}`;
// end of showing the current date

// make the the api
send.addEventListener("click", () => {
  let content;
  axios
    .get(
      `http://api.aladhan.com/v1/timingsByCity?country=${countrySearch.value}&city=${citySearch.value}`
    )
    .then(function (response) {
      // handle success
      cityName.innerHTML = response.data.data.meta.timezone;
      let data = response.data.data.timings;
      document.querySelector(".body .container").innerHTML = "";
      content = `
        <div class="parent-box">
        <div class="box">
            <h4 class="nameElsalh">
               العشاء
            </h4>
            <h2 class="time">${data.Isha}</h2>
        </div>
        <div class="box">
            <h4 class="nameElsalh">
               المغرب
            </h4>
            <h2 class="time">${data.Maghrib}</h2>
        </div>
        <div class="box">
            <h4 class="nameElsalh">
               العصر
            </h4>
            <h2 class="time">${data.Asr}</h2>
        </div>
        <div class="box">
            <h4 class="nameElsalh">
               الظهر
            </h4>
            <h2 class="time">${data.Dhuhr}</h2>
        </div>
        <div class="box">
            <h4 class="nameElsalh">
               الفجر
            </h4>
            <h2 class="time">${data.Fajr}</h2>
        </div>
    </div>
        `;
      document.querySelector(".body .container").innerHTML = content;
    });
  // .catch(() => {
  //   alert("please enter right data");
  // });
});

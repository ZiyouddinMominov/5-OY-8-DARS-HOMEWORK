function getWeather() {
  // Foydalanuvchi kiritgan shahar nomini olish
  var city = document.getElementById("cityInput").value;

  // API so'rovini tuzish uchun URL
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=f74108027d8772226c54f2ecb46a7174";

  // Fetch orqali API dan ma'lumotlarni olish
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Olingan ma'lumotlarni brauzerga chiqarish
      var weatherResult = document.getElementById("weatherResult");
      weatherResult.innerHTML = `
                <h2>${data.name} ob havo ma'lumotlari</h2>
                <p>Hozirgi havo: ${data.weather[0].description}</p>
                <p>Temperatura: ${data.main.temp} °C</p>
                <p>Max temperatura: ${data.main.temp_max} °C</p>
                <p>Min temperatura: ${data.main.temp_min} °C</p>
            `;
    })
    .catch((error) => {
      console.error("Ma'lumotlar olishda xatolik:", error);
    });
}

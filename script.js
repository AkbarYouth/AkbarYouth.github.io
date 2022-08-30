async function prayerTimes() {
  let url = "https://api.aladhan.com/v1/timingsByCity?city=London&country=United%Kingdom&method=15&midnightMode=1&tune=0,0,0,0,0,15,0,0,0"
  let response = await fetch(url);
  let data = await response.json()
  let dayData = data.data.timings

  let calendarData = data.data.date

  let hijriDayData = data.data.date.hijri
  let hijriMonthData = data.data.date.hijri.month
  let hijriYearData = data.data.date.hijri
  let date = (calendarData.readable) + " - " + hijriDayData.day + " " + hijriMonthData.en + " " + hijriYearData.year;

  document.getElementById("prayerTimesResult").innerHTML = "Imsaak: " + dayData.Imsak + "<br>" + "Fajr: " + dayData.Fajr + "<br>" + "Sunrise: " + dayData.Sunrise + "<br>" + "Dhuhr: " + dayData.Dhuhr + "<br>" + "Sunset: " + dayData.Sunset + "<br>" + "Maghrib: " + dayData.Maghrib;


  document.getElementById("date").innerHTML = date
}
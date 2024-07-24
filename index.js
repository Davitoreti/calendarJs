const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

let days = [];
let months = [];
let years = [];
let numbers = 1;
let lastDays = []

function generateCalendar() {
    const table = document.getElementById('table');
    const day = document.getElementsByTagName('td');

    function makeDays() {
      for (let i = 0; i <= 34; i++) {
        day[i].innerText = numbers++;
        if(numbers > 31){
          numbers = 0;
          numbers++;
        } 
      }
      days.push(day);
        return day;
    }

    function makeMonths() {
      const month = days;
      for (let i = 0; i < 12; i++) {
        month[i]
        months.push(month)
      }
      return months;
    };

    function makeYear() {
      const year = months;
      for (let i = 0; i < 5; i++) {
        year[i]
        years.push(year)
      }
      return years
    };
  
    console.log(makeDays());
    // console.log(makeMonths())
    // console.log(makeYear())  
}

console.log(generateCalendar());
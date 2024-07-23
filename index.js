const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

function generateCalendar() {
    const table = document.getElementById('table');
    const month = document.getElementById('month');
    const day = document.getElementById('cell');

    let days = [];
    let number = 0;

   day.forEach(function(day){
    for (let i = 0; i <= 31; i++) {
        console.log(i);
      }
   })
    
   console.log(day)
    
}

console.log(generateCalendar());
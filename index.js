const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

let days = [];
let months = [];
let years = [];

function generateCalendar() {
    const table = document.getElementById('table');
    const day = document.getElementsByTagName('td');
    let numbers = 1;

    function makeDays() {
        for (let i = 0; i < day.length; i++) {
            day[i].innerText = numbers++;
            if (numbers > 31) {
                numbers = 1;
            }
        }
        for (let i = 0; i < day.length; i++) {
            days.push(parseInt(day[i].innerText)); 
        }
    }
    makeDays();

    function makeMonths() {
        // Vamos separar os dias por mês
        let startIndex = 0;
        for (let i = 1; i <= 12; i++) {
            let monthDays = days.slice(startIndex, startIndex + 31); // Pegar até 31 dias para cada mês
            months.push(monthDays);
            startIndex += 31; // Avançar para o próximo mês
        }
        return months;
    };
    console.log(makeMonths())

    function makeYear() {
        // Vamos separar os meses por ano
        let startIndex = 0;
        for (let i = 1; i <= 2; i++) {
            let yearMonths = months.slice(startIndex, startIndex + 12); // Pegar os 12 meses do ano
            years.push(yearMonths);
            startIndex += 12; // Avançar para o próximo ano
        }
        return years;
    };
    console.log(years)

    makeMonths();
    makeYear();

    return years;
}

console.log(generateCalendar());

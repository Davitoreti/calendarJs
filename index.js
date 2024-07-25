const currentDate = new Date();
let currentNumberDay = currentDate.getDay();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() - 1;
let currentYear = currentDate.getFullYear();

let days = [];
let months = [];
let years = [];

function generateCalendar() {
    const table = document.getElementById('table');
    const day = document.getElementsByTagName('td');
    const header = document.getElementById('header');
    const arrowForward = document.getElementById('arrow-forward');
    const arrowBack = document.getElementById('arrow-back');
    let namesMonths = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let nameDay = daysOfWeek[currentNumberDay];

    // function makeDays() {
    //     for (let i = 0; i < day.length; i++) {
    //         day[i].innerText = currentDay++;
    //         // if (currentDay > 31) {
    //         //     currentDay = 1;
    //         // }
    //     }
    //     // for (let i = 0; i < day.length; i++) {
    //     //     days.push(parseInt(day[i].innerText)); 
    //     // }
    // }
    // makeDays();

    function makeDays() {
        let dayCounter = 1;
        
        // for (let i = 1 ; i < day.length ; i++){
        //     if (i < day.length){
        //         day[i].innerText = dayCounter++
        //     }
        // }
        
        for (let i = currentDay; i < day.length; i++){
            day[i].innerText = currentDay++
            if (currentDay > 31) {
                currentDay = 1;
            }
        }

        
    }
    makeDays()

    console.log(currentNumberDay);
    console.log(currentDay)

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

    header.innerText = namesMonths[currentMonth + 1] + ' - ' + currentYear;

    arrowForward.addEventListener('click', function(ev){
        ev.preventDefault();
        
        currentMonth++;

        if (currentMonth >= namesMonths.length) {
            currentMonth = 0;
            currentYear++;
        };

        header.innerText = namesMonths[currentMonth] + ' - ' + currentYear;
    });

    arrowBack.addEventListener('click', function(ev){
        ev.preventDefault();

        currentMonth--;

        if (currentMonth < 0) {
        currentMonth = 11
        currentYear--;
        }

        header.innerText = namesMonths[currentMonth] + ' - ' + currentYear;
    });

    makeMonths();
    makeYear();

    return years;
}

console.log(generateCalendar());
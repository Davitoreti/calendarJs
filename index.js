


const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Definindo o número de dias por mês
const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate(); // Número de dias no mês

const namesMonths = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

function generateCalendar() {
    const table = document.getElementById('table');
    const header = document.getElementById('header');
    const arrowForward = document.getElementById('arrow-forward');
    const arrowBack = document.getElementById('arrow-back');
    
    // Atualizar o cabeçalho do calendário
    function updateHeader() {
        header.innerText = `${namesMonths[currentMonth]} - ${currentYear}`;
    }
    
    // Gerar o calendário para o mês atual
    function renderCalendar() {
        const days = table.getElementsByTagName('td');
        let dayCounter = 1;

        // Limpar o conteúdo das células
        for (let i = 0; i < days.length; i++) {
            days[i].innerText = '';
        }

        // Primeiro dia do mês
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        
        // Preencher os dias
        for (let i = firstDay; i < firstDay + daysInMonth(currentMonth, currentYear); i++) {
            if (i < days.length) {
                days[i].innerText = dayCounter++;
            }
        }
    }

    // Avançar para o próximo mês
    arrowForward.addEventListener('click', function(ev){
        ev.preventDefault();
        
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }

        updateHeader();
        renderCalendar();
    });

    // Voltar para o mês anterior
    arrowBack.addEventListener('click', function(ev){
        ev.preventDefault();

        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }

        updateHeader();
        renderCalendar();
    });

    // Inicializar o calendário
    updateHeader();
    renderCalendar();
}

generateCalendar();

class Calendar {
    constructor() {
        this.currentDate = new Date();
        this.selectedDate = null;
        this.init();
    }

    init() {
        this.renderCalendar();
        this.addEventListeners();
    }

    renderCalendar() {
        const monthYearElement = document.getElementById('current-month-year');
        const calendarGrid = document.getElementById('calendar-grid');
        
        // Очищаем предыдущие дни (оставляем только заголовки дней недели)
        while (calendarGrid.children.length > 7) {
            calendarGrid.removeChild(calendarGrid.lastChild);
        }

        // Устанавливаем заголовок месяца и года
        const monthNames = [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ];
        
        monthYearElement.textContent = 
            `${monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;

        // Получаем первый день месяца и количество дней в месяце
        const firstDay = new Date(
            this.currentDate.getFullYear(), 
            this.currentDate.getMonth(), 
            1
        );
        
        const lastDay = new Date(
            this.currentDate.getFullYear(), 
            this.currentDate.getMonth() + 1, 
            0
        );
        
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

        // Добавляем пустые ячейки для дней предыдущего месяца
        const prevMonthLastDay = new Date(
            this.currentDate.getFullYear(), 
            this.currentDate.getMonth(), 
            0
        ).getDate();
        
        for (let i = 0; i < startingDayOfWeek; i++) {
            const dayElement = this.createDayElement(
                prevMonthLastDay - startingDayOfWeek + i + 1,
                true
            );
            calendarGrid.appendChild(dayElement);
        }

        // Добавляем дни текущего месяца
        const today = new Date();
        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = this.createDayElement(i, false);
            
            // Проверяем, является ли день сегодняшним
            if (this.currentDate.getMonth() === today.getMonth() &&
                this.currentDate.getFullYear() === today.getFullYear() &&
                i === today.getDate()) {
                dayElement.classList.add('today');
            }
            
            // Проверяем, выбран ли этот день
            if (this.selectedDate &&
                this.currentDate.getMonth() === this.selectedDate.getMonth() &&
                this.currentDate.getFullYear() === this.selectedDate.getFullYear() &&
                i === this.selectedDate.getDate()) {
                dayElement.classList.add('selected');
            }
            
            calendarGrid.appendChild(dayElement);
        }

        // Добавляем дни следующего месяца
        const totalCells = 42; // 6 строк по 7 дней
        const remainingCells = totalCells - (startingDayOfWeek + daysInMonth);
        
        for (let i = 1; i <= remainingCells; i++) {
            const dayElement = this.createDayElement(i, true);
            calendarGrid.appendChild(dayElement);
        }
    }

    createDayElement(day, isOtherMonth) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        if (isOtherMonth) {
            dayElement.classList.add('other-month');
        } else {
            dayElement.addEventListener('click', () => {
                this.selectDate(day);
            });
        }
        
        return dayElement;
    }

    selectDate(day) {
        this.selectedDate = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth(),
            day
        );
        
        this.updateSelectedDateDisplay();
        this.renderCalendar(); // Перерисовываем календарь для обновления выделения
    }

    updateSelectedDateDisplay() {
        const selectedDateText = document.getElementById('selected-date-text');
        
        if (this.selectedDate) {
            const options = { 
                month: 'long', 
                day: 'numeric',
            };
            selectedDateText.textContent = this.selectedDate.toLocaleDateString('ru-RU', options);
        } else {
            selectedDateText.textContent = 'не выбрано';
        }
    }

    addEventListeners() {
        document.getElementById('prev-month').addEventListener('click', () => {
            this.navigateMonth(-1);
        });

        document.getElementById('next-month').addEventListener('click', () => {
            this.navigateMonth(1);
        });
    }

    navigateMonth(direction) {
        this.currentDate.setMonth(this.currentDate.getMonth() + direction);
        this.renderCalendar();
    }
}

// Инициализация календаря при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new Calendar();
});
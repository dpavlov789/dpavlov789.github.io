class Calendar {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.currentDate = new Date();
        this.selectedDate = new Date();
        this.events = new Map();
        
        this.init();
    }
    
    init() {
        this.render();
        this.bindEvents();
        this.loadEvents();
    }
    
    render() {
        const title = this.container.querySelector('.calendar-title');
        const daysContainer = this.container.querySelector('.calendar-days');
        
        // Устанавливаем заголовок
        title.textContent = this.getMonthYearString();
        
        // Очищаем контейнер дней
        daysContainer.innerHTML = '';
        
        // Получаем первый день месяца и количество дней
        const firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
        const lastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Коррекция для понедельника
        
        // Создаем дни из предыдущего месяца
        const prevMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 0);
        const daysInPrevMonth = prevMonth.getDate();
        
        for (let i = startDay - 1; i >= 0; i--) {
            const day = this.createDay(daysInPrevMonth - i, true);
            daysContainer.appendChild(day);
        }
        
        // Создаем дни текущего месяца
        const today = new Date();
        
        for (let i = 1; i <= daysInMonth; i++) {
            const day = this.createDay(i, false);
            
            // Проверяем, сегодня ли это
            if (this.currentDate.getMonth() === today.getMonth() &&
                this.currentDate.getFullYear() === today.getFullYear() &&
                i === today.getDate()) {
                day.classList.add('today');
            }
            
            // Проверяем, выбран ли день
            if (this.selectedDate &&
                this.currentDate.getMonth() === this.selectedDate.getMonth() &&
                this.currentDate.getFullYear() === this.selectedDate.getFullYear() &&
                i === this.selectedDate.getDate()) {
                day.classList.add('selected');
            }
            
                      
            daysContainer.appendChild(day);
        }
        
        // Создаем дни следующего месяца
        const totalCells = 42; // 6 строк по 7 дней
        const remainingCells = totalCells - (startDay + daysInMonth);
        
        for (let i = 1; i <= remainingCells; i++) {
            const day = this.createDay(i, true);
            daysContainer.appendChild(day);
        }
    }
    
    createDay(dayNumber, isOtherMonth) {
        const day = document.createElement('div');
        day.className = 'day';
        day.textContent = dayNumber;
        
        if (isOtherMonth) {
            day.classList.add('other-month');
        } else {
            day.addEventListener('click', () => {
                this.selectDay(dayNumber);
            });
        }
        
        return day;
    }
    
    bindEvents() {
        this.container.querySelector('.prev-month').addEventListener('click', () => {
            this.prevMonth();
        });
        
        this.container.querySelector('.next-month').addEventListener('click', () => {
            this.nextMonth();
        });
        
        this.container.querySelector('.today-btn').addEventListener('click', () => {
            this.goToToday();
        });
    }
    
    prevMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.render();
    }
    
    nextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.render();
    }
    
    goToToday() {
        this.currentDate = new Date();
        this.selectedDate = new Date();
        this.render();
    }
    
    selectDay(day) {
        this.selectedDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
        this.render();
        
        // Генерируем событие выбора даты
        this.triggerDateSelect();
    }
    
    getMonthYearString() {
        const months = [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ];
        
        return `${months[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;
    }
    
    getDateKey(date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
    
    addEvent(date, event) {
        const dateKey = this.getDateKey(date);
        
        if (!this.events.has(dateKey)) {
            this.events.set(dateKey, []);
        }
        
        this.events.get(dateKey).push(event);
        this.saveEvents();
        this.render();
    }
    
    getEvents(date) {
        const dateKey = this.getDateKey(date);
        return this.events.get(dateKey) || [];
    }
    
    saveEvents() {
        const eventsObj = Object.fromEntries(this.events);
        localStorage.setItem('calendarEvents', JSON.stringify(eventsObj));
    }
    
    loadEvents() {
        const savedEvents = localStorage.getItem('calendarEvents');
        if (savedEvents) {
            this.events = new Map(Object.entries(JSON.parse(savedEvents)));
        }
    }
    
    triggerDateSelect() {
        const event = new CustomEvent('dateSelect', {
            detail: {
                date: this.selectedDate,
                events: this.getEvents(this.selectedDate)
            }
        });
        
        this.container.dispatchEvent(event);
    }
}

// Расширенная версия с событиями
class AdvancedCalendar extends Calendar {
    constructor(containerSelector) {
        super(containerSelector);
        this.createEventForm();
    }
    
    addEventFromForm() {
        const title = this.eventForm.querySelector('.event-title').value;
        const description = this.eventForm.querySelector('.event-description').value;
        
        if (title) {
            this.addEvent(this.selectedDate, {
                title: title,
                description: description,
                time: new Date().toLocaleTimeString()
            });
            
            // Очищаем форму
            this.eventForm.querySelector('.event-title').value = '';
            this.eventForm.querySelector('.event-description').value = '';
        }
    }
}

// Инициализация календаря
document.addEventListener('DOMContentLoaded', () => {
    const calendar = new AdvancedCalendar('.calendar-container');
    
    // Пример добавления обработчика выбора даты
    calendar.container.addEventListener('dateSelect', (e) => {
        console.log('Выбрана дата:', e.detail.date.toLocaleDateString());
        console.log('События:', e.detail.events);
    });
    
    // Добавляем несколько тестовых событий
    const testDate = new Date();
    testDate.setDate(testDate.getDate() + 2);
    
    calendar.addEvent(testDate, {
        title: 'Тестовое событие',
        description: 'Это тестовое событие для демонстрации',
        time: '10:00'
    });
});
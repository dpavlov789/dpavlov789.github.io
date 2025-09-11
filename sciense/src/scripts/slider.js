class Slider {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.slides = this.container.querySelectorAll('.slide');
        this.prevBtn = this.container.querySelector('.slider__prev');
        this.nextBtn = this.container.querySelector('.slider__next');
        this.dotsContainer = this.container.querySelector('.slider__dots');
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    init() {
        // Создаем точки навигации
        this.createDots();
        
        // Добавляем обработчики событий
        this.addEventListeners();
        
        // Запускаем автоплей
        this.startAutoPlay();
        
        // Показываем первый слайд
        this.showSlide(this.currentSlide);
    }
    
    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
    }
    
    addEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Останавливаем автоплей при наведении
        this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.container.addEventListener('mouseleave', () => this.startAutoPlay());
        
        // Добавляем поддержку клавиатуры
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }
    
    showSlide(index) {
        // Скрываем все слайды
        this.slides.forEach(slide => slide.classList.remove('active'));
        
        // Убираем активный класс со всех точек
        this.dotsContainer.querySelectorAll('.dot').forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Показываем нужный слайд
        this.slides[index].classList.add('active');
        
        // Активируем соответствующую точку
        this.dotsContainer.querySelectorAll('.dot')[index].classList.add('active');
        
        this.currentSlide = index;
    }
    
    nextSlide() {
        let nextIndex = this.currentSlide + 1;
        if (nextIndex >= this.slides.length) {
            nextIndex = 0;
        }
        this.showSlide(nextIndex);
    }
    
    prevSlide() {
        let prevIndex = this.currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = this.slides.length - 1;
        }
        this.showSlide(prevIndex);
    }
    
    goToSlide(index) {
        this.showSlide(index);
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Смена каждые 5 секунд
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Инициализация слайдера
document.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.slider__container');
});
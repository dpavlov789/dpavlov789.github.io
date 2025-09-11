const triggerElement1 = document.querySelector('.slider__arrow-btn1');
const targetElement1 = document.querySelector('.slider__arrow1');
const newClass1 = 'slider__arrow-white1'; // Имя класса, который будем добавлять
triggerElement1.addEventListener('mouseover', function() {
  targetElement1.classList.add(newClass1); // Добавляем класс
});
triggerElement1.addEventListener('mouseout', function() {
  targetElement1.classList.remove(newClass1); // Удаляем класс
});

const triggerElement2 = document.querySelector('.slider__arrow-btn2');
const targetElement2 = document.querySelector('.slider__arrow2');
const newClass2 = 'slider__arrow-white2'; // Имя класса, который будем добавлять
triggerElement2.addEventListener('mouseover', function() {
  targetElement2.classList.add(newClass2); // Добавляем класс
});
triggerElement2.addEventListener('mouseout', function() {
  targetElement2.classList.remove(newClass2); // Удаляем класс
});
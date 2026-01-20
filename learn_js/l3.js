const form = document.getElementById('userForm');
const output = document.getElementById('output');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    
    // 1. Получите значения из полей формы
    // 2. Создайте функцию для форматирования вывода
    // 3. Выведите результат в output
    // 4. Очистите форму
    // 5. Измените цвет фона based на выбранный цвет

    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const ageValue = document.getElementById('age').value;
    const colorValue = document.getElementById('color').value;

    function formatUserData(name, email, age, color) {
    return `
        <h3>Данные пользователя:</h3>
        <p><strong>Имя:</strong> ${nameValue}</p>
        <p><strong>Email:</strong> ${emailValue}</p>
        <p><strong>Возраст:</strong> ${ageValue}</p>
        <p><strong>Любимый цвет:</strong> ${colorValue}</p>
    `;
    }

    const userHTML = formatUserData(nameValue, emailValue, ageValue, colorValue);
    output.innerHTML = userHTML;

    const colorMap = {
        'red': '#ffcccc',
        'blue': '#cce5ff', 
        'green': '#ccffcc'
    };
    document.body.style.backgroundColor = colorMap[colorValue];

    form.reset();

});
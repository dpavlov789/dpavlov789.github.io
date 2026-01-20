const chButton = document.getElementById('changeButton');
const msg = document.querySelector('#message');



chButton.addEventListener('click', function() {
    msg.textContent = "Новый текст в абзаце";
    document.body.style.backgroundColor = "lightblue";
    console.log('Меняем стили');
});
const $href = document.querySelector('a');

$href.addEventListener('click', function (e) {
   e.preventDefault();
   e.target.textContent = prompt('Введите новый текст ссылки');
});

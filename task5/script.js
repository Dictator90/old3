const $input = document.querySelector('input');
const $cloneInput = document.querySelector('#duplicateField');
const $button = document.querySelector('button[type=submit]');

$input.addEventListener('keyup', function (e){
    $cloneInput.textContent = e.target.value;
});

$button.addEventListener('click', function (e){
    console.log($input.value);
    $input.value = $cloneInput.textContent = '';
})


const $trafficLight = document.querySelector('#trafficLight');
let $cycles = document.querySelectorAll('.cycle');
let nextFire = 0;

$trafficLight.addEventListener('click', function (){
    let next;
    $cycles.forEach((e, i) => {
        if (nextFire === i) {
            e.style.backgroundColor = e.dataset.color;
            next = Number(e.dataset.next);
        }
        else {
            e.style.backgroundColor = null;
        }
    });

    nextFire = next;
});

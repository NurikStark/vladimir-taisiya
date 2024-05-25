const map = new mapgl.Map('container1', {
    key: 'ff4628d2-e86c-4f72-9e63-41c268c22c37',
    center: [37.612876, 55.763377],
    zoom: 13,
    style: 'c080bb6a-8134-4993-93a1-5b4d8c36a59b',
});
const marker = new mapgl.Marker(map, {
    coordinates: [37.612876, 55.763377],
});
const day = document.getElementById('day');
const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const currentYear = new Date().getFullYear();


const newYear = new Date(`21 jul ${currentYear} 00:00:00`);
console.log(newYear)
function countDownTimer()   {
    const todayDate = Date.now()

    const gap = newYear - todayDate;
    const d = Math.floor(gap / 1000 / 60 / 60 / 24)
    const h = Math.floor((gap / 1000 / 60 / 60) % 24)
    const m = Math.floor((gap / 1000 / 60) % 60)
    const s = Math.floor((gap / 1000) % 60)

    day.innerHTML = d < 10 ? '0' + d : d
    hrs.innerHTML = h < 10 ? '0' + h : h
    min.innerHTML = m < 10 ? '0' + m : m
    sec.innerHTML = s < 10 ? '0' + s : s

    console.log(todayDate)
}setInterval(countDownTimer, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    var otherDrinkCheckbox = document.getElementById('invation-info-drink5');
    var elseInput = document.getElementById('else');

    if (form) {
        form.addEventListener('submit', function(event) {
            var radio1 = document.getElementById('invation-info1');
            var radio2 = document.getElementById('invation-info2');
            var drinkSelected = false;

            // Проверка, что выбрана хотя бы одна опция присутствия
            if (!radio1.checked && !radio2.checked) {
                event.preventDefault();
                alert('Пожалуйста, выберите один из вариантов присутствия.');
                return;
            }

            // Проверка, что выбрана хотя бы одна опция напитков
            var drinkCheckboxes = document.querySelectorAll('input[name="drinks"]');
            drinkCheckboxes.forEach(function(drink) {
                if (drink.checked) {
                    drinkSelected = true;
                }
            });

            if (!drinkSelected) {
                event.preventDefault();
                alert('Пожалуйста, выберите хотя бы один вариант напитков.');
                return;
            }

            // Проверка, что поле для названия напитка заполнено, если выбрана опция "Другое"
            if (otherDrinkCheckbox.checked && elseInput.value.trim() === '') {
                event.preventDefault();
                alert('Пожалуйста, укажите название напитка.');
                return;
            }

            // Добавление текста из поля "Другое" к данным формы, если выбрано "Другое"
            if (otherDrinkCheckbox.checked) {
                var otherDrinkInput = document.createElement('input');
                otherDrinkInput.type = 'hidden';
                otherDrinkInput.name = 'other_drink';
                otherDrinkInput.value = elseInput.value;
                form.appendChild(otherDrinkInput);
            }
        });
    }

    // Блокировка и разблокировка поля для ввода в зависимости от выбора чекбокса "Другое"
    otherDrinkCheckbox.addEventListener('change', function() {
        if (otherDrinkCheckbox.checked) {
            elseInput.disabled = false;
            elseInput.required = true;
        } else {
            elseInput.disabled = true;
            elseInput.required = false;
            elseInput.value = ''; // Очистка поля, если чекбокс не выбран
        }
    });

    // Изначально блокируем поле для ввода
    elseInput.disabled = true;

    // Логика для скрытия и показа метки
    var inputs = document.querySelectorAll('.input-container input, .input-container_1 input');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            var label = input.previousElementSibling;
            if (input.value !== '') {
                label.style.opacity = '0';
            } else {
                label.style.opacity = '1';
            }
        });
    });
});






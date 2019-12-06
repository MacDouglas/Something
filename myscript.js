var on;

var sumScore = 0; // Переменная для изменения счета игрока.

var square = document.getElementById('square'); //Красный круг

var score = document.getElementById('score'); //Счет

var time = document.getElementById('timer'); //Таймер

function move() //Смещение красного круга

{

var fromLeft = Math.random() * (58 - 32) + 32; //Случайные координаты красного круга с левой стороны от 32 до 58 % экрана.

var fromTop = Math.random() * (540 - 100) + 100; //Случайные координаты красного круга сверху от 100 до 540 пикселей.

var click = document.getElementById('square'); //Красный круг

click.style.left = fromLeft + '%'; //Изменение положения круга на экране

click.style.top = fromTop + 'px'; // Изменение положения круга на экране

sumScore++; //Увеличение счета

score.innerHTML = 'Счет: ' + sumScore; //Визуальное изменение счета на экране

}

function gameStart() { //Начало игры

sumScore = 0; //Обнуление счета

score.innerHTML = 'Счет: ' + sumScore;

square.style.width = '40px'; //Создание красного круга, изменение ширины с 0 до 40 пикселей

square.style.height = '40px'; //Создание красного круга, изменение длинны с 0 до 40 пикселей

time.innerHTML = 'Времени прошло: 0:00'; //Сброс времени

clearInterval(on); //Запуск интервала.

timerStart(); //Запуск таймера

}

function gameEnd() { //Конец игры

square.style.width = '0px'; //Удаление красного круга изменением длины до 0 пикселей

square.style.height = '0px'; //Удаление красного круга изменением ширины до 0 пикселей

alert('Ваш счет: ' + sumScore); //alert-сообщение с итоговым счетов

score.innerHTML = 'Счет: ' + sumScore;

}

function timerStart() { //Функция запуска таймера.

var second = 0; //Сброс таймера

var minute = 0; //Сброс таймера

on = setInterval(function () { //Интервал. Действия выполняются раз в секунду

second++; //Увеличение поля секунд таймера

if (second == 60) {minute++; second = 0;} //Сброс секунд, прибавление минут.

if (second <= 9) time.innerHTML = 'Времени прошло: ' + minute + ':0'+second; //Шаблон отображения таймера, если прошло меньше десяти секунд

else time.innerHTML = 'Времени прошло: ' + minute + ':' + second;

// Шаблон отображения таймера, если прошло больше десяти секунд

if (minute == 1) {clearInterval(on); gameEnd();} //Условие прекращения игры, остановка таймера, вызов функции gameEnd()

}, 1000);

}
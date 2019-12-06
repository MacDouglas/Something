<!DOCTYPE html>

<html>

<head>

<meta charset="utf-8"> //Кодировка

<title>Best game ever</title>

<link rel="stylesheet" href="styles/style.css"> //Подключения файла стилей

</head>

<body>

<p style="margin-left: 38%; margin-top: 1%"> Добро пожаловать, <? echo $_POST["name"]; ?>!</p> //Приветствие игрока. Использование переданного имени в PHP коде. Отступ слева – 38% экрана, сверху – 1%.

<button id="start-button" onclick="gameStart()">Начать игру!</button>

// Кнопка начало игры. Нажатие вызывает js-функцию gameStart().

<div id="score">Счет: 0</div> // Отображение счета

<div id="timer" > Времени прошло: 0:00</div> // Таймер

<div id="square" onclick="move() "> </div> // Круг, который нужно нажимать, нажатие вызывает функцию move().

<div id="size"> </div> //Границы поля

<script type="text/javascript" src="scripts/myscript.js"></script> // Вызов javascript

</body>

</html>
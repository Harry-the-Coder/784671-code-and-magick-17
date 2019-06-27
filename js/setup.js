'use strict';

var namesOfMages = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
var surnamesOfMages = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyeColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Функция для получения рандомного значения с каждого массива

var getRandomPoint = function (currentArray) {
  var rand = Math.floor(Math.random() * currentArray.length);
  return rand;
};

// Функция которая формирует массив объектов магов со случайными свойствами
var getWizardList = function () {
  var wizardList = [];
  var currentName;
  var currentSurname;
  for (var i = 0; i < 4; i++) {
    currentName = namesOfMages[getRandomPoint(namesOfMages)];
    currentSurname = surnamesOfMages[getRandomPoint(surnamesOfMages)];
    wizardList.push({
      name: currentName + ' ' + currentSurname,
      coatColor: coatColors[getRandomPoint(coatColors)],
      eyeColor: eyeColors[getRandomPoint(eyeColors)]
    });
  }
  return wizardList;
};

// Отрисовывает все штуки

var createSimilarWizards = function () {
  for (var i = 0; i < getWizardList().length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = getWizardList()[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = getWizardList()[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = getWizardList()[i].eyeColor;
    similarListElement.appendChild(wizardElement);
  }
};

createSimilarWizards();
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

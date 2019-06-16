'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var GAP = 10;
var FONT_GAP = 16;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;
var textForWinner = ['Ура вы победили!', 'Список результатов:'];

var renderCloud = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var createTextForWinner = function (ctx, content, font, color, x, y) {
  ctx.font = font;
  ctx.fillStyle = color;
  for (var i = 0; i < content.length; i++) {
    ctx.fillText(content[i], x, y);
    y += GAP + FONT_GAP;
  }
};

var getMaxElement = function (times) {
  var maxPoint = times[0];

  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxPoint) {
      maxPoint = times[i];
    }
  }
  return maxPoint;
};

var getRandomOpacity = function () {
  var a = Math.random() + 0.1;
  return 'rgba' + '(' + '0,' + '0,' + '159,' + a + ')';
};

var createWinnerGraph = function (ctx, players, times) {
  var currentXPoint = CLOUD_X + BAR_GAP;
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomOpacity();
    }
    ctx.fillRect(currentXPoint, CLOUD_HEIGHT * 1 / 3 + GAP - BAR_HEIGHT, BAR_WIDTH, BAR_HEIGHT * (Math.round(times[i])) / maxTime);

    currentXPoint += BAR_WIDTH + BAR_GAP;
  }

  currentXPoint = CLOUD_X + BAR_GAP;

  for (i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], currentXPoint, CLOUD_HEIGHT * 1 / 3 + GAP - BAR_HEIGHT + FONT_GAP);
    ctx.fillText((Math.round(times[i])), currentXPoint, CLOUD_HEIGHT * 1 / 3 - (BAR_HEIGHT - BAR_HEIGHT * (Math.round(times[i])) / maxTime));

    currentXPoint += BAR_WIDTH + BAR_GAP;
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR);

  createTextForWinner(ctx, textForWinner, '16px PT Mono', '#000', CLOUD_WIDTH / 2, CLOUD_Y + GAP + FONT_GAP);
  createWinnerGraph(ctx, names, times);
};

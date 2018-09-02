var p1 = document.querySelector('#left');
var p2 = document.querySelector('#right');

var m1 = document.querySelector('#m1');
var m2 = document.querySelector('#m2');
var m3 = document.querySelector('#m3');
var m4 = document.querySelector('#m4');
var m5 = document.querySelector('#m5');

var t1 = document.querySelector('#t1');
var t2 = document.querySelector('#t2');

var title = document.querySelector('#title_screen_group');
var container = document.querySelector('div');
var end_message = document.querySelector('#end_message');
var solution = document.querySelector('#solution');
var prompt = document.querySelector('#prompt_2');
var moves = document.querySelector('#moves');
var minimal = document.querySelector('#min');

var current_level = 0;
var revealed = false;
var prompted = false;
var started = false;
var move_count = 0;
var moved = false;

var left_map;
var right_map;

window.addEventListener('keydown', function(e) {
  try {
    switch(e.keyCode) {
      case 13:
        if (!started) {
          start();
        }
        break;
      case 82:
        if (started) {
          prompt.innerHTML = 'restart: (R key)';
          _reset();
        }
        break;
      case 83:
        if (prompted) {
          _reset();
          solution.style.visibility = 'visible';
          prompt.innerHTML = 'restart: (R key)';
          revealed = true;
        }
        break;
      case 39:
        if (left_map[player1.row][player1.col+1] != 1 && ((player1.col+1) < 6)) {
          player1.x += 50;
          player1.col++;
          moved = true;
        }
        break;
      case 37:
        if (left_map[player1.row][player1.col-1] != 1 && ((player1.col-1) > -1)) {
          player1.x -= 50;
          player1.col--;
          moved = true;
        }
        break;
      case 38:
        e.returnValue = false; // prevent the screen from scrolling.
        if (((player1.row-1) > -1) && left_map[player1.row-1][player1.col] != 1) {
          player1.y -= 50;
          player1.row--;
          moved = true;
        }
        break;
      case 40:
        e.returnValue = false; // prevent the screen from scrolling.
        if (((player1.row+1) < 8) && left_map[player1.row+1][player1.col] != 1) {
          player1.y += 50;
          player1.row++;
          moved = true;
        }
        break;
    }

    switch(e.keyCode) {
      case 39:
        if (right_map[player2.row][player2.col+1] != 1 && ((player2.col+1) < 6)) {
          player2.x += 50;
          player2.col++;
          moved = true;
        }
        break;
      case 37:
        if (right_map[player2.row][player2.col-1] != 1 && ((player2.col-1) > -1)) {
          player2.x -= 50;
          player2.col--;
          moved = true;
        }
        break;
      case 38:
        e.returnValue = false; // prevent the screen from scrolling.
        if (((player2.row-1) > -1) && right_map[player2.row-1][player2.col] != 1) {
          player2.y -= 50;
          player2.row--;
          moved = true;
        }
        break;
      case 40:
        e.returnValue = false; // prevent the screen from scrolling.
        if (((player2.row+1) < 8) && right_map[player2.row+1][player2.col] != 1) {
          player2.y += 50;
          player2.row++;
          moved = true;
        }
        break;
    }

    player1.group.setAttribute('transform', 'scale(0.9) translate(' + player1.x + ',' + player1.y + ')');
    player2.group.setAttribute('transform', 'scale(0.9) translate(' + player2.x + ',' + player2.y + ')');

    if (moved) {
      move_count++;
      moves.innerHTML = 'moves: ' + move_count;
      moved = false;
    }

    if ((left_map[player1.row][player1.col] == 2) && (right_map[player2.row][player2.col] == 2)) {
      if (((current_level == 0) && (move_count > 9)) ||
          ((current_level == 1) && (move_count > 15)) ||
          ((current_level == 2) && (move_count > 23))) {
        prompt.innerHTML = (revealed) ? 'restart: (R key)' : 'restart: (R key), solution: (S key)';
        prompt.style.visibility = 'visible';
        prompted = true;
      }
      else {
        setTimeout(function() {
          moves.innerHTML = 'moves: 0';
          move_count = 0;
          if (current_level == 0) {
            solution.style.visibility = 'hidden';
            minimal.innerHTML = 'minimal: 15';
            current_level++;
            load(level_2);
          }
          else if (current_level == 1) {
            solution.style.visibility = 'hidden';
            minimal.innerHTML = 'minimal: 23';
            current_level++;
            load(level_3);
          }
          else {
            container.style.opacity = '0';
            end_message.style.opacity = '1';
          }
          revealed = false;
        }, 250);
      }
    }
  } catch(e) {}
});

function load(level) {
  left_map = level.maps.left;
  right_map = level.maps.right;

  player1.group.setAttribute('transform', level.players.left.transform);
  player2.group.setAttribute('transform', level.players.right.transform);

  player1.x = level.players.left.x;
  player1.y = level.players.left.y;
  player1.row = level.players.left.row;
  player1.col = level.players.left.col;

  player2.x = level.players.right.x;
  player2.y = level.players.right.y;
  player2.row = level.players.right.row;
  player2.col = level.players.right.col;

  try {
    m1.setAttribute('transform', level.bubbles.m1.transform);
    m1.style.visibility = level.bubbles.m1.visibility;
    m1.children[0].children[0].setAttribute('style', ('stroke:none;fill:'+level.bubbles.m1.color+';stroke-width:0'));
  } catch (error) {}
  try {
    m2.setAttribute('transform', level.bubbles.m2.transform);
    m2.style.visibility = level.bubbles.m2.visibility;
    m2.children[0].children[0].setAttribute('style', ('stroke:none;fill:'+level.bubbles.m2.color+';stroke-width:0'));
  } catch (error) {}
  try {
    m3.setAttribute('transform', level.bubbles.m3.transform);
    m3.style.visibility = level.bubbles.m3.visibility;
    m3.children[0].children[0].setAttribute('style', ('stroke:none;fill:'+level.bubbles.m3.color+';stroke-width:0'));
  } catch (error) {}
  try {
    m4.setAttribute('transform', level.bubbles.m4.transform);
    m4.style.visibility = level.bubbles.m4.visibility;
    m4.children[0].children[0].setAttribute('style', ('stroke:none;fill:'+level.bubbles.m4.color+';stroke-width:0'));
  } catch (error) {}
  try {
    m5.setAttribute('transform', level.bubbles.m5.transform);
    m5.style.visibility = level.bubbles.m5.visibility;
    m5.children[0].children[0].setAttribute('style', ('stroke:none;fill:'+level.bubbles.m5.color+';stroke-width:0'));
  } catch (error) {}
  try {
    m6.setAttribute('transform', level.bubbles.m6.transform);
    m6.style.visibility = level.bubbles.m6.visibility;
    m6.children[0].children[0].setAttribute('style', ('stroke:none;fill:'+level.bubbles.m6.color+';stroke-width:0'));
  } catch (error) {}
  try {
    m7.setAttribute('transform', level.bubbles.m7.transform);
    m7.style.visibility = level.bubbles.m7.visibility;
    m7.children[0].children[0].setAttribute('style', ('stroke:none;fill:'+level.bubbles.m7.color+';stroke-width:0'));
  } catch (error) {}
  try {
    m8.setAttribute('transform', level.bubbles.m8.transform);
    m8.style.visibility = level.bubbles.m8.visibility;
    m8.children[0].children[0].setAttribute('style', ('stroke:none;fill:'+level.bubbles.m8.color+';stroke-width:0'));
  } catch (error) {}

  t1.setAttribute('transform', level.signals.left.transform);
  t2.setAttribute('transform', level.signals.right.transform);

  p1.children[5].children[0].setAttribute('style', ('stroke:none;fill:'+level.hearts.h1.color+';stroke-width:0'));
  p2.children[5].children[0].setAttribute('style', ('stroke:none;fill:'+level.hearts.h2.color+';stroke-width:0'));
  addSolution(level);
}

function addSolution(level) {
  var arrow = level.solution.arrows;
  while (solution.firstChild) {
    solution.removeChild(solution.firstChild);
  }
  for (var i = 0; i < arrow.length; i++) {
    solution.append(arrow[i].image);
  }
  solution.setAttribute('transform', 'translate(' + level.solution.x + ', -5)');
}

function _reset() {
  moves.innerHTML = 'moves: 0';
  prompted = false;
  move_count = 0;
  if (current_level == 0) {
    load(level_1);
  }
  else if (current_level == 1) {
    load(level_2);
  }
  else {
    load(level_3);
  }
}

function start() {
  document.querySelector('#title_screen').setAttribute('visibility', 'hidden');
  title.setAttribute('visibility', 'hidden');
  moves.style.visibility = 'visible';
  min.style.visibility = 'visible';
  prompt.style.visibility = 'visible';
  started = true;
  load(level_1);
}

var node = r.path('M401.788,74.476c-63.492-82.432-188.446-33.792-188.446,49.92c0-83.712-124.962-132.356-188.463-49.92c-65.63,85.222-0.943,234.509,188.459,320.265C402.731,308.985,467.418,159.698,401.788,74.476z', {
  fillStyle: 'solid',
  strokeWidth: 2,
  roughness: 3,
  fill: '#fddb6d'
});
node.setAttribute('transform', 'translate(220, 250)');
title.append(node);

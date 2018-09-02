class Player {
  constructor(group) {
    this.group = document.querySelector('#' + group);

    this.x = (group == 'p1') ? 118 : 570;
    this.y = (group == 'p1') ? 510 : 250;
    this.row = (group == 'p1') ? 7 : 2;
    this.col = 0;

    this.character = (group == 'p1') ? document.querySelector('#p1') : document.querySelector('#p2');
  }
}

var player1 = new Player('p1');
var player2 = new Player('p2');

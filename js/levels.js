var level_1 = {
  maps: {
    left: [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0] ],
    right: [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0] ]
  },
  players: {
    left: {
      transform: 'scale(0.9) translate(118, 456)',
      x: 118,
      y: 456,
      row: 6,
      col: 0
    },
    right: {
      transform: 'scale(0.9) translate(570, 256)',
      x: 570,
      y: 256,
      row: 2,
      col: 0
    }
  },
  bubbles: {
    m3: {
      transform: 'scale(1.4) translate(-312, -100)',
      visibility: 'visible',
      color: '#fd79a8'
    },
    m4: {
      transform: 'scale(1.4) translate(-590, -20)',
      visibility: 'visible',
      color: '#39cccd'
    }
  },
  hearts: {
    h1: {
      color: '#fd79a8'
    },
    h2: {
      color: '#39cccd'
    }
  },
  signals: {
    left: {
      transform: 'scale(1) translate(250, 424)'
    },
    right: {
      transform: 'scale(1) translate(660, 424)'
    }
  },
  solution: {
    arrows: [ new Arrow(0, 100),
              new Arrow(0, 150),
              new Arrow(2, 200),
              new Arrow(2, 250),
              new Arrow(2, 300),
              new Arrow(2, 350),
              new Arrow(2, 400),
              new Arrow(0, 450),
              new Arrow(3, 500) ],
    x: 247
  }
}

var level_2 = {
  maps: {
    left: [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0] ],
    right: [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0] ]
  },
  players: {
    left: {
      transform: 'scale(0.9) translate(365, 505)',
      x: 365,
      y: 505,
      row: 7,
      col: 5
    },
    right: {
      transform: 'scale(0.9) translate(570, 500)',
      x: 570,
      y: 500,
      row: 7,
      col: 0
    }
  },
  bubbles: {
    m1: {
      transform: 'scale(1.4) translate(-314, -107)',
      visibility: 'visible',
      color: '#fddb6d'
    },
    m2: {
      transform: 'scale(1.4) translate(-295, 36)',
      visibility: 'visible',
      color: '#fd79a8'
    },
    m3: {
      transform: 'scale(1.4) translate(-602, -8)',
      visibility: 'visible',
      color: '#fddb6d'
    },
    m4: {
      transform: 'scale(1.4) translate(-590, -56)',
      visibility: 'visible',
      color: '#fd79a8'
    }
  },
  hearts: {
    h1: {
      color: '#fddb6d'
    },
    h2: {
      color: '#fd79a8'
    }
  },
  signals: {
    left: {
      transform: 'scale(1) translate(252, 232)'
    },
    right: {
      transform: 'scale(1) translate(610, 195)'
    }
  },
  solution: {
    arrows: [ new Arrow(0, 100),
              new Arrow(0, 150),
              new Arrow(0, 200),
              new Arrow(3, 250),
              new Arrow(1, 300),
              new Arrow(3, 350),
              new Arrow(1, 400),
              new Arrow(1, 450),
              new Arrow(3, 500),
              new Arrow(3, 550),
              new Arrow(0, 600),
              new Arrow(2, 650),
              new Arrow(3, 700),
              new Arrow(3, 750),
              new Arrow(3, 800) ],
    x: 150
  }
}

var level_3 = {
  maps: {
    left: [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0] ],
    right: [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 2, 0],
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0] ]
  },
  players: {
    left: {
      transform: 'scale(0.9) translate(118, 510)',
      x: 118,
      y: 510,
      row: 7,
      col: 0
    },
    right: {
      transform: 'scale(0.9) translate(570, 250)',
      x: 570,
      y: 250,
      row: 2,
      col: 0
    }
  },
  bubbles: {
    m1: {
      transform: 'scale(1.4) translate(-314, -107)',
      visibility: 'hidden',
      color: '#fddb6d'
    },
    m2: {
      transform: 'scale(1.4) translate(-295, 36)',
      visibility: 'hidden',
      color: '#fd79a8'
    },
    m3: {
      transform: 'scale(1.4) translate(-312, -138)',
      visibility: 'visible',
      color: '#ff8243' // orange
    },
    m4: {
      transform: 'scale(1.4) translate(-590, -25)',
      visibility: 'visible',
      color: '#fddb6d'
    },
    m5: {
      transform: 'scale(1.4) translate(-600, -138)',
      visibility: 'visible',
      color: '#ff8243' // orange
    },
    m6: {
      transform: 'scale(1.4) translate(-590, 40)',
      visibility: 'visible',
      color: '#fddb6d'
    },
    m7: {
      transform: 'scale(1.4) translate(-312, -70)',
      visibility: 'visible',
      color: '#ff8243' // orange
    },
    m8: {
      transform: 'scale(1.4) translate(-300, 40)',
      visibility: 'visible',
      color: '#fddb6d'
    }
  },
  hearts: {
    h1: {
      color: '#ff8243'
    },
    h2: {
      color: '#fddb6d'
    }
  },
  signals: {
    left: {
      transform: 'scale(1) translate(205, 368)'
    },
    right: {
      transform: 'scale(1) translate(705, 281)'
    }
  },
  solution: {
    arrows: [ new Arrow(0, 100),
              new Arrow(3, 150),
              new Arrow(0, 200),
              new Arrow(0, 250),
              new Arrow(3, 300),
              new Arrow(3, 350),
              new Arrow(3, 400),
              new Arrow(3, 450),
              new Arrow(1, 500),
              new Arrow(3, 550),
              new Arrow(0, 600),
              new Arrow(0, 650),
              new Arrow(2, 700),
              new Arrow(0, 750),
              new Arrow(2, 800),
              new Arrow(2, 850),
              new Arrow(1, 900),
              new Arrow(1, 950),
              new Arrow(1, 1000),
              new Arrow(2, 1050),
              new Arrow(2, 1100),
              new Arrow(0, 1150),
              new Arrow(0, 1200) ],
    x: 24
  }
}

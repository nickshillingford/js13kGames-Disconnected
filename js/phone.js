var r = rough.svg(document.querySelector('svg'));

class Phone {
  constructor(group, color) {
    this.group = document.querySelector('#' + group);
    this.body = r.path('M42.595,0H17.405C14.977,0,13,1.977,13,4.405v51.189C13,58.023,14.977,60,17.405,60h25.189C45.023,60,47,58.023,47,55.595V4.405C47,1.977,45.023,0,42.595,0z', {
      roughness: 0.115,
      strokeWidth: 0.14,
      fillStyle: 'solid',
      fill: '#ecf0f1'
    });
    this.speaker = r.path('M26,5h4c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4c-0.553,0-1,0.447-1,1S25.447,5,26,5z', {
      roughness: 0.05,
      strokeWidth: 0.1,
      fillStyle: 'solid',
      fill: '#fff'
    });
    this.button = r.path('M16.5,29.496c-1.585,0-2.875-1.29-2.875-2.876c0-1.585,1.29-2.875,2.875-2.875s2.875,1.29,2.875,2.875C19.375,28.206,18.085,29.496,16.5,29.496z M16.5,24.745z', {
      roughness: 0.05,
      strokeWidth: 0.1,
      fillStyle: 'solid',
      fill: '#fff'
    });
    this.screen = r.path('M15,8h30v38H15V8z', {
      fillStyle: 'solid',
      strokeWidth: 0.12,
      roughness: 0.245,
      fill: '#fff'
    });
    this.thread = r.path('M15,12h30', {
      fillStyle: 'solid',
      strokeWidth: 0.1,
      roughness: 0.175,
      stroke: '#000'
    });
    this.heart = r.path('M401.788,74.476c-63.492-82.432-188.446-33.792-188.446,49.92c0-83.712-124.962-132.356-188.463-49.92c-65.63,85.222-0.943,234.509,188.459,320.265C402.731,308.985,467.418,159.698,401.788,74.476z', {
      fillStyle: 'solid',
      strokeWidth: 10.5,
      roughness: 6.95,
      fill: color
    });
    this.speaker.setAttribute('transform', 'translate(1.3, 0)');
    this.button.setAttribute('transform', 'scale(0.8) translate(21, 40)');
    this.heart.setAttribute('transform', 'scale(0.006) translate(3850, 1450)');
    this.group.append(this.body);
    this.group.append(this.screen);
    this.group.append(this.speaker);
    this.group.append(this.button);
    this.group.append(this.thread);
    this.group.append(this.heart);
  }
}

new Phone('left', '#fd79a8');
new Phone('right', '#39cccd');

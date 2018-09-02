class Signal {
  constructor(group, color) {
    this.group = document.querySelector('#' + group);
    this.dot = r.path('M16.5,29.496c-1.585,0-2.875-1.29-2.875-2.876c0-1.585,1.29-2.875,2.875-2.875s2.875,1.29,2.875,2.875C19.375,28.206,18.085,29.496,16.5,29.496z M16.5,24.745c-1.034,0-1.875,0.841-1.875,1.875s0.841,1.876,1.875,1.876s1.875-0.842,1.875-1.876S17.534,24.745,16.5,24.745z', {
      fill: color,
      stroke: color,
      fillStyle: 'solid',
      roughness: 0.05
    });
    this.arc1 = r.path('M23.105,20.516c-0.128,0-0.256-0.049-0.354-0.146c-1.67-1.67-3.89-2.59-6.252-2.59c-2.361,0-4.582,0.92-6.251,2.59c-0.195,0.195-0.512,0.195-0.707,0s-0.195-0.512,0-0.707c1.859-1.859,4.33-2.883,6.958-2.883c2.629,0,5.1,1.023,6.959,2.883c0.195,0.195,0.195,0.512,0,0.707C23.361,20.467,23.233,20.516,23.105,20.516z', {
      fill: color,
      stroke: color,
      fillStyle: 'solid',
      roughness: 0.05
    });
    this.arc1.style.opacity = 0;
    this.arc1.id = 'arc1';
    this.arc2 = r.path('M27.803,15.817c-0.128,0-0.256-0.049-0.354-0.146c-6.037-6.038-15.861-6.037-21.898,0c-0.195,0.195-0.512,0.195-0.707,0s-0.195-0.512,0-0.707c6.427-6.428,16.885-6.427,23.313,0c0.195,0.195,0.195,0.512,0,0.707C28.059,15.768,27.931,15.817,27.803,15.817z', {
      fill: color,
      stroke: color,
      fillStyle: 'solid',
      roughness: 0.05
    });
    this.arc2.style.opacity = 0;
    this.arc2.id = 'arc2';
    this.arc3 = r.path('M32.5,11.12c-0.128,0-0.256-0.049-0.354-0.146c-8.626-8.625-22.665-8.627-31.293,0c-0.195,0.195-0.512,0.195-0.707,0s-0.195-0.512,0-0.707c9.018-9.018,23.69-9.016,32.707,0c0.195,0.195,0.195,0.512,0,0.707C32.756,11.071,32.628,11.12,32.5,11.12z', {
      fill: color,
      stroke: color,
      fillStyle: 'solid',
      roughness: 0.05
    });
    this.arc3.style.opacity = 0;
    this.arc3.id = 'arc3';
    this.group.append(this.dot);
    this.group.append(this.arc1);
    this.group.append(this.arc2);
    this.group.append(this.arc3);
  }
}

new Signal('t1', '#34495e');
new Signal('t2', '#34495e');

export default class BackgroundChar {
  constructor() {
    this.dom = {
      separator: document.querySelector('.separator')
    }

    this.classNames = [
      'abbey-road',
      'let-it-be',
      'sgt-peppers-lonely-heart-club-band',
      'yellow-submarine'
    ];

    this.charArr = ['Y', 'K', 'D', 'G'];

    this.init();
  }

  init() {
    this.setClassname();
  }

  setClassname() {
    const index = Math.floor(Math.random() * this.classNames.length);
    this.char = this.charArr[index];
    document.body.classList.add(this.classNames[index]);
  }
}
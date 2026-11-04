export default class FocusItem {
  constructor(selector) {
    this.dom = {
      el: document.querySelector(selector),
      main: document.querySelector('.main-content')
    }

    this.classNames = [
      'here-comes-the-sun',
      'come-together',
      'strawberry-field-forever',
      'hey-jude',
      'i-am-the-walrus',
      'lucy-in-the-sky-with-diamonds',
      'accross-the-universe',
      'helter-skeleter',
      'day-tripper'
    ];

    this.charArr = ['X', 'W', 'Z', 'R', 'H', 'M', 'N', 'V', 'S'];

    this.init();
  }

  init() {
    this.setClassname();
  }

  setClassname() {
    const index = Math.floor(Math.random() * this.classNames.length);
    this.char = this.charArr[index];
    this.dom.main.classList.add(this.classNames[index]);
  }
}
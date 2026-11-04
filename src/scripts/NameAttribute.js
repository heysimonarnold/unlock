export default class NameAttribute {
  constructor() {
    this.dom = {
      el: document.querySelector('.validate-code')
    }

    this.init();
  }

  init() {
    this.getCodeChar();
    this.setAttribute();
  }

  getCodeChar() {
    const characters = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789@#!?&$%';
    const index = Math.floor(Math.random() * characters.length);
    this.char = characters[index];
  }

  setAttribute() {
    this.dom.el.setAttribute('name', this.char);
  }
}
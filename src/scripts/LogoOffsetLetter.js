export default class OffsetLetter {
  constructor() {
    this.dom = {
      logo: document.querySelector('.logo'),
      letters: document.querySelectorAll('.logo .letter')
    }

    this.offset = {
      top: [
        {
          percent: 19.5745,
          px: -23
        },
        {
          percent: -19.5745,
          px: 23
        },
        {
          percent: 17.0215,
          px: -20
        },
        {
          percent: -17.0215,
          px: 20
        },
      ],
      left: [
        {
          percent: -10.69,
          px: 7
        },
        {
          percent: 10.69,
          px: -7
        },
      ]
    };
    
    this.init();
  }

  init() {
    this.getCodeChar();
    this.getRandomLetter();
    this.setOffset();
    this.bindEvents();
  }

  getCodeChar() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#!?&$%';
    const index = Math.floor(Math.random() * characters.length);
    this.char = characters[index];
  }

  getRandomLetter() {
    const index = Math.floor(Math.random() * (this.dom.letters.length - 1));
    this.dom.el = this.dom.letters[index];
    this.observer = new MutationObserver(() => this.validatePosition());
  }

  setOffset() {
    const topIndex = Math.floor(Math.random() * this.offset.top.length);
    this.top = this.offset.top[topIndex];

    const leftIndex = Math.floor(Math.random() * this.offset.left.length);
    this.left = this.offset.left[leftIndex];

    this.dom.el.style.transform = `translate(${this.left.percent}%, ${this.top.percent}%)`;
  }

  validatePosition() {
    const top = parseInt(this.dom.el.style.top);
    const left = parseInt(this.dom.el.style.left);

    if (top === this.top.px && left === this.left.px ) {
      this.success();
    }
  }

  bindEvents() {
    this.observer.observe(this.dom.el, {attributes: true});
  }

  success() {
    this.observer.disconnect();
    this.dom.logo.classList.add('is-completed'); 
    document.head.insertAdjacentHTML('beforeend', `<!-- ${this.char} -->`)
  }
}
export default class ListItemFirst {
  constructor() {
    this.dom = {
      el: document.querySelector('#gottaBeFirst')
    }

    this.classNames = [
      'bulbasaur',
      'ivisaur',
      'venusaur',
      'charmander',
      'charmaleon',
      'charizard',
      'squirtle',
      'wartotle',
      'blastoise',
      'caterpie'
    ]

    this.char = Math.floor(Math.random() * this.classNames.length);

    this.init();
  }

  init() {
    this.setClass();
  }

  setClass() {
    this.dom.el.classList.add(this.classNames[this.char]);
  }
}
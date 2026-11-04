export default class FaviconChar {
  constructor() {
    this.dom = {
      placeholder: document.querySelector(".penny-lane"),
    };

    this.placeholderArr = [
      "/unlock/img/a.svg",
      "/unlock/img/b.svg",
      "/unlock/img/c.svg",
      "/unlock/img/d.svg",
      "/unlock/img/e.svg",
      "/unlock/img/f.svg",
      "/unlock/img/g.svg",
    ];
    this.charArr = ["@", "#", "!", "?", "$", "%", "&"];

    this.init();
  }

  init() {
    this.setPlaceholder();
  }

  setPlaceholder() {
    const index = Math.floor(Math.random() * this.placeholderArr.length);
    this.placeholder = this.placeholderArr[index];
    this.dom.placeholder.innerText = this.placeholder;
    this.char = this.charArr[index];
  }
}

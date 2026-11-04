export default class MultipleOccurences {
  constructor() {
    this.char = 0;
    this.comment = '<!-- The Beatles -->';
    this.selectorsArr = ['title', 'link', 'li', 'header', 'main', 'footer', 'ol', 'body'];

    this.init();
  }

  init() {
    this.selectorsArr.forEach(selector => {
      const itemsArr = document.querySelectorAll(selector);
      const itemIndex = Math.floor(Math.random() * itemsArr.length);
      const shouldBeInserted = Math.random() > 0.5;

      if (shouldBeInserted) {
        if(this.char < 8) {
          this.char++;
          this.insertComment(itemsArr[itemIndex]);
        }
      }
    })

    this.char++; // Add the one in comment
  }

  insertComment(item) {
    const where = Math.random() > 0.5 ? 'afterend' : 'beforebegin';

    item.insertAdjacentHTML(where, this.comment);
  }
}
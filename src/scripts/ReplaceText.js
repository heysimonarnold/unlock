export default class ReplaceText {
  constructor(target, acceptedTextsArr) {
    this.dom = {
      target: document.querySelector(target)
    };

    this.acceptedTextsArr = acceptedTextsArr;

    this.lettersAscii = {
      B: `
____  
|  _ \\ 
| |_) |
|  _ < 
| |_) |
|____/ `,
C: `
 _____ 
/ ____|
| |     
| |     
| |____ 
\\_____|`,
D: `
_____  
|  __ \\ 
| |  | |
| |  | |
| |__| |
|_____/ `,
F: `
 ______ 
|  ____|
| |__   
|  __|  
| |     
|_|   `,
H: `
 _    _ 
| |  | |
| |__| |
|  __  |
| |  | |
|_|  |_|`,
L: ` 
 _      
| |     
| |     
| |     
| |____ 
|______|`,
Q: `
 ____  
/ __ \\ 
| |  | |
| |  | |
| |__| |
\\___\\_\\
`
    }

    this.observer = new MutationObserver(() => this.validate());

    this.init();
  }

  init() {
    this.randomchar();
    this.bindEvents();
  }

  randomchar() {
    const charArr = ['B', 'C', 'D', 'F', 'H', 'L', 'Q'];
    const index = Math.floor(Math.random() * charArr.length);
    this.char = charArr[index];
    this.ascii = this.lettersAscii[this.char];
  }

  bindEvents() {
    this.observer.observe(this.dom.target.childNodes[0], {characterData: true});
  }

  validate() {
    const match = this.acceptedTextsArr.includes(this.dom.target.innerText);

    if (match) this.success();
  }

  success() {
    console.log(`%c ${this.ascii}`, 'color: #0092C0');
  }
}
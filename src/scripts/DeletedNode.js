export default class DeletedNode {
  constructor(parent, el) {
    this.dom = {
      parent: document.querySelector(parent),
      el: document.querySelector(`${parent} ${el}`),
    };

    this.observer = new MutationObserver(() => this.validate());
    this.randomchar();
    this.init();
  }

  init() {
    this.bindEvents();
  }

  randomchar() {
    const charArr = ["A", "E", "I", "U"];
    const index = Math.floor(Math.random() * charArr.length);
    this.char = charArr[index];
    this.sound = new Audio(`./sounds/${this.char}.mp3`);
  }

  bindEvents() {
    this.observer.observe(this.dom.parent, { childList: true });
  }

  validate() {
    const stillExist = this.dom.parent.contains(this.dom.el);

    if (!stillExist) this.success();
  }

  success() {
    this.observer.disconnect();
    this.createPlayer();
  }

  createPlayer() {
    const btn = `<button class="btn-pushable play-tip" role="button">
      <span class="btn-shadow"></span>
      <span class="btn-edge"></span>
      <span class="btn-front text">
        <i class="fa-solid fa-circle-play"></i>
        Jouer l'extrait audio
      </span>
    </button>`;

    this.dom.parent.insertAdjacentHTML("afterbegin", btn);
    this.dom.player = this.dom.parent.querySelector(".play-tip");
    this.dom.player.addEventListener("click", () => {
      this.sound.currentTime = 0;
      this.sound.play();
    });
  }
}

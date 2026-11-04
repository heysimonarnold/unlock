import "./style.css";
import BackgroundChar from "./scripts/BackgroundChar";
import FaviconChar from "./scripts/FaviconChar";
import NameAttribute from "./scripts/NameAttribute";
import FocusItem from "./scripts/FocusItem";
import LogoOffsetLetter from "./scripts/LogoOffsetLetter";
import ListItemFirst from "./scripts/ListItemFirst";
import MultipleOccurences from "./scripts/MultipleOccurences";
import DeletedNode from "./scripts/DeletedNode";
import ReplaceText from "./scripts/ReplaceText";

class Game {
  constructor() {
    this.dom = {
      main: document.querySelector(".main-content"),
      inputsList: document.querySelector(".characters-list"),
      charactersArr: document.querySelectorAll(".character"),
      validate: document.querySelector(".validate-code"),
    };

    this.init();
  }

  init() {
    this.bindChallenges();
    this.getGeneratedCode();
    this.bindEvents();
  }

  bindChallenges() {
    this.backgroundChar = new BackgroundChar();
    this.faviconChar = new FaviconChar();
    this.nameAttribute = new NameAttribute();
    this.focusItem = new FocusItem("#focus");
    this.logoOffsetLetter = new LogoOffsetLetter();
    this.multipleOccurences = new MultipleOccurences();
    this.listItemFirst = new ListItemFirst();
    this.deletedNode = new DeletedNode(".main-footer", ".note");
    this.replaceText = new ReplaceText(".warning", [
      "Sésame, ouvre-toi!",
      '"Sésame, ouvre-toi!"',
    ]);
  }

  bindEvents() {
    this.dom.validate.addEventListener("click", () => this.validate());
  }

  getEnteredCombination() {
    let combination = "";
    this.dom.charactersArr.forEach((character) => {
      combination += character.value;
    });

    return combination;
  }

  validate() {
    const enteredCombination = this.getEnteredCombination();

    if (enteredCombination === this.combination) {
      this.success();
    } else {
      this.fail();
    }
  }

  fail() {
    document.body.classList.add("has-failed");
    this.dom.inputsList.addEventListener("animationend", () =>
      document.body.classList.remove("has-failed"),
    );
  }

  success() {
    document.body.classList.add("has-succeeded");
    document.body.insertAdjacentHTML(
      "beforeend",
      '<video src="https://i.giphy.com/media/xncwX5CAXArucuH85E/giphy.mp4" autoplay loop muted class="ending">',
    );
  }

  getGeneratedCode() {
    const no1 = this.backgroundChar.char;
    const no2 = this.faviconChar.char;
    const no3 = this.nameAttribute.char;
    const no4 = this.focusItem.char;
    const no5 = this.logoOffsetLetter.char;
    const no6 = this.multipleOccurences.char;
    const no7 = this.listItemFirst.char;
    const no8 = this.deletedNode.char;
    const no9 = this.replaceText.char;

    this.combination = `${no1}${no2}${no3}${no4}${no5}${no6}${no7}${no8}${no9}`;
  }
}

window.game = new Game();

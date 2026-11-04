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
    this.challenges = {
      backgroundChar: new BackgroundChar(),
      faviconChar: new FaviconChar(),
      nameAttribute: new NameAttribute(),
      focusItem: new FocusItem("#focus"),
      logoOffsetLetter: new LogoOffsetLetter(),
      multipleOccurences: new MultipleOccurences(),
      listItemFirst: new ListItemFirst(),
      deletedNode: new DeletedNode(".main-footer", ".note"),
      replaceText: new ReplaceText(".warning", [
        "Sésame, ouvre-toi!",
        '"Sésame, ouvre-toi!"',
      ]),
    };
  }

  bindEvents() {
    this.dom.validate?.addEventListener("click", () => this.validate());
  }

  getEnteredCombination() {
    return Array.from(this.dom.charactersArr)
      .map((character) => character.value)
      .join("");
  }

  validate() {
    const enteredCombination = this.getEnteredCombination();

    if (enteredCombination === this.combination) {
      this.success();
      return;
    }

    this.fail();
  }

  fail() {
    document.body.classList.add("has-failed");
    this.dom.inputsList.addEventListener(
      "animationend",
      () => document.body.classList.remove("has-failed"),
      { once: true },
    );
  }

  success() {
    document.body.classList.add("has-succeeded");

    if (document.querySelector(".ending")) {
      return;
    }

    document.body.insertAdjacentHTML(
      "beforeend",
      '<video src="https://i.giphy.com/media/xncwX5CAXArucuH85E/giphy.mp4" autoplay loop muted class="ending">',
    );
  }

  getGeneratedCode() {
    const {
      backgroundChar,
      faviconChar,
      nameAttribute,
      focusItem,
      logoOffsetLetter,
      multipleOccurences,
      listItemFirst,
      deletedNode,
      replaceText,
    } = this.challenges;

    this.combination = `${backgroundChar.char}${faviconChar.char}${nameAttribute.char}${focusItem.char}${logoOffsetLetter.char}${multipleOccurences.char}${listItemFirst.char}${deletedNode.char}${replaceText.char}`;
  }
}

window.game = new Game();

"use strict"

const alphabetEn = "qwertyuiopasdfghjklzxcvbnm";
const alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю";
const aplhabetUa = "йцукенгшщзхїфівапролджєячсмитьбю";
const alphabet = [alphabetEn, alphabetRu, aplhabetUa];
let keyboardEn, keyboardRu, keyboardUa;

const addKeyboardLayout = (alphabet) => {
  const keyboardTopEn = alphabet[0].substring(0, alphabet[0].indexOf("a"));
  const keyboardMiddleEn = alphabet[0].substring(alphabet[0].indexOf("a"), alphabet[0].indexOf("z"));
  const keyboardBottomEn = alphabet[0].substring(alphabet[0].indexOf("z"), alphabet[0].length);

  const keyboardTopRu = alphabet[1].substring(0, alphabet[1].indexOf("ф"));
  const keyboardMiddleRu = alphabet[1].substring(alphabet[1].indexOf("ф"), alphabet[1].indexOf("я"));
  const keyboardBottomRu = alphabet[1].substring(alphabet[1].indexOf("я"), alphabet[1].length);

  const keyboardTopUa = alphabet[2].substring(0, alphabet[2].indexOf("ф"));
  const keyboardMiddleUa = alphabet[2].substring(alphabet[2].indexOf("ф"), alphabet[2].indexOf("я"));
  const keyboardBottomUa = alphabet[2].substring(alphabet[2].indexOf("я"), alphabet[2].length);

  keyboardEn = [keyboardTopEn, keyboardMiddleEn, keyboardBottomEn];
  keyboardRu = [keyboardTopRu, keyboardMiddleRu, keyboardBottomRu];
  keyboardUa = [keyboardTopUa, keyboardMiddleUa, keyboardBottomUa];

  return [keyboardEn, keyboardRu, keyboardUa];

}

addKeyboardLayout(alphabet);

const keyboard = {
  layouts: {
    en: {
      topRow: keyboardEn[0],
      middleRow: keyboardEn[1],
      bottomRow: keyboardEn[2]
    },
    ru: {
      topRow: keyboardRu[0],
      middleRow: keyboardRu[1],
      bottomRow: keyboardRu[2]
    },
    ua: {
      topRow: keyboardUa[0],
      middleRow: keyboardUa[1],
      bottomRow: keyboardUa[2]
    }
  },
  langs: ['en', 'ru', 'ua'],
  currentLang: '',
  changeCurrent(inquiry) {
    let bool = true;
    while (bool) {
      if (inquiry === 0 || inquiry === 1 || inquiry === 2) {
        bool = false;
        keyboard.currentLang = keyboard.langs[inquiry];
        console.log(`Язык - ${keyboard.currentLang}`);
      } else {
        alert('Выбран недоступный язык');
        inquiry = +prompt("Выбери язык", "en-0, ru-1, ua-2");
        keyboard.getRandCharInAlph(inquiry);
      }
    }
  },
  getRandCharInAlph(inquiry) {
    let lans = Object.keys(keyboard.layouts[keyboard.langs[inquiry]]);
    let lan = lans.map(key => keyboard.layouts[keyboard.langs[inquiry]][key]);
    console.log(lan);
    lan = lan[0].concat(lan[1]).concat(lan[2]);
    console.log(lan);
    let keyboardRandom = lan.replace(/[^a-zа-яїіє]/gi).replace(/\s+/gi, ', ').charAt(Math.random() * lan.length);
    console.log(`Случайная буква - ${keyboardRandom}`);
  }
};


function start() {
  let inquiry = +prompt("Выбери язык", "en-0, ru-1, ua-2");
  keyboard.changeCurrent(inquiry);
  keyboard.getRandCharInAlph(inquiry);
}

start();
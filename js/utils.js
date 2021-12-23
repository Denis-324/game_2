//получение массивов с физической силой и магической
const getPhysicalNum = (obj) => {
  const physicalNum = Object.values(obj).filter(
    (_, index) => index % 2 !== 0 && index >= 1 && index < 5
  );
  return physicalNum;
};

const getMagicNum = (obj) => {
  const magicNum = Object.values(obj).filter(
    (_, index) => index % 2 == 0 && index >= 1 && index < 5
  );
  return magicNum;
};

//расчет урона
const getDamage = (arrMonster, arrMan) => {
  let damageMonster = arrMonster[0] - arrMonster[0] * (arrMan[1] / 100);
  let damageMan = arrMan[0] - arrMan[0] * (arrMonster[1] / 100);
  let damageArr = [damageMonster, damageMan];
  return damageArr;
};

//Окончательный подсчет урона
const damageCounting = (arrMagic, arrPhysial) => {
  let arrDamage = [];
  if (arrMagic[0] === 0) {
    arrDamage.push(arrPhysial[0]);
  } else if (arrPhysial[0] === 0) {
    arrDamage.push(arrMagic[0]);
  } else if (arrMagic[0] === 0 && arrPhysial[0] === 0) {
    arrDamage.push(0);
  }

  if (arrMagic[1] === 0) {
    arrDamage.push(arrPhysial[1]);
  } else if (arrPhysial[1] === 0) {
    arrDamage.push(arrMagic[1]);
  } else if (arrMagic[1] === 0 && arrPhysial[1] === 0) {
    arrDamage.push(0);
  }

  return arrDamage;
};

//Ограничивает выбор действий у рыцаря
const getCounterСooldown = () => {
  if (gameBtn2.hasAttribute("disabled")) {
    gameBtn2Counter++;
  }
  if (gameBtn2Counter >= 5) {
    gameBtn2.removeAttribute("disabled", "disabled");
    gameBtn2.classList.remove("disabled");
    gameBtn2Counter = 0;
  }
  if (gameBtn3.hasAttribute("disabled")) {
    gameBtn3Counter++;
  }
  if (gameBtn3Counter >= 4) {
    gameBtn3.removeAttribute("disabled", "disabled");
    gameBtn3.classList.remove("disabled");
    gameBtn3Counter = 0;
  }
  if (gameBtn4.hasAttribute("disabled")) {
    gameBtn4Counter++;
  }
  if (gameBtn4Counter >= 5) {
    gameBtn4.removeAttribute("disabled", "disabled");
    gameBtn4.classList.remove("disabled");
    gameBtn4Counter = 0;
  }
};

//Ограничение выбора действий у монстра
let arr = [0, 1, 2];
let ranomCount1 = 0;
let ranomCount2 = 0;

const getRand = () => {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};
const getRundomCooldown = () => {
  let valueRandom = getRand();
  if (valueRandom === 2) {
    arr.pop();
  }
  if (valueRandom === 1) {
    arr.splice(1, 1);
  }
  if (!arr.includes(1)) {
    ranomCount1++;
  }
  if (!arr.includes(2)) {
    ranomCount2++;
  }
  if (ranomCount1 > 3) {
    arr.push(1);
    arr.sort();
    ranomCount1 = 0;
  }
  if (ranomCount2 > 2) {
    arr.push(2);
    arr.sort();
    ranomCount2 = 0;
  }

  return valueRandom;
};

//Выбор уровня сложности
window.onload = function () {
  let difBg = document.createElement("div");
  let difTitle = document.createElement("div");
  let difForm = document.createElement("form");
  difForm.classList.add("dif-form");
  let difPar1 = document.createElement("p");
  difPar1.classList.add("dif-par");
  let difPar2 = document.createElement("p");
  difPar2.classList.add("dif-par");
  let difPar3 = document.createElement("p");
  difPar3.classList.add("dif-par");
  let difInp1 = document.createElement("input");
  let difInp2 = document.createElement("input");
  let difInp3 = document.createElement("input");
  let difSpan1 = document.createElement("span");
  difSpan1.classList.add("dif-span");
  difSpan1.textContent = "light";
  let difSpan2 = document.createElement("span");
  difSpan2.classList.add("dif-span");
  difSpan2.textContent = "medium";
  let difSpan3 = document.createElement("span");
  difSpan3.classList.add("dif-span");
  difSpan3.textContent = "hard";
  difInp1.setAttribute("type", "radio");
  difInp1.setAttribute("name", "dif");
  difInp1.setAttribute("value", "12");
  difInp2.setAttribute("type", "radio");
  difInp2.setAttribute("name", "dif");
  difInp2.setAttribute("value", "10");
  difInp3.setAttribute("type", "radio");
  difInp3.setAttribute("name", "dif");
  difInp3.setAttribute("value", "8");
  difBg.classList.add("game__difficult-bg");
  difTitle.classList.add("game__difficult-title");
  difTitle.innerHTML = `Выбери сложность:`;
  difPar1.append(difInp1);
  difPar2.append(difInp2);
  difPar3.append(difInp3);
  difPar1.append(difSpan1);
  difPar2.append(difSpan2);
  difPar3.append(difSpan3);
  difForm.append(difPar1);
  difForm.append(difPar2);
  difForm.append(difPar3);
  difTitle.append(difForm);
  difBg.append(difTitle);
  game.append(difBg);

  const inputs = difForm.querySelectorAll('[name="dif"]');

  inputs.forEach((input) => {
    input.addEventListener("click", () => {
      healthManVar = `${+input.value}`;
      healthMan.textContent = healthManVar;
      difBg.remove();
    });
  });
};

//==========================================

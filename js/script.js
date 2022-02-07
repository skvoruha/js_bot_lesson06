const numMin = 0
const numMax = 100
const makeNum = 88

function numberBot(numMin, numMax, makeNum){

  function numCheck(){

    let number = prompt("Выберите число от 1 до 100");

    if (number == null) {
      return alert("Игра окончена" );
    } else if(number == ""){
      alert("Введи число!");
      numCheck()
    } else {
      alert(" Вы ввели: " + number);

      if (number < numMin || number > numMax)
      {
        alert("Вы ввели число за пределами заданных чисел");
        numCheck()
      }

      if (number > makeNum){
        alert("Загаданное число меньше");
        numCheck()
      }

      if (number < makeNum){
        alert("Загаданное число больше");
        numCheck()
      }

      if (number == makeNum){
        return alert("Поздравляю, Вы угадали!!!");
      }

      if(!isNumber(number) || number == ""){
        alert("Введи число!");
        numCheck()
      }
    }
  }

  function isNumber(x){
    return !isNaN(parseFloat(x)) && isFinite(x)
  }

  numCheck()
}

numberBot(numMin, numMax, makeNum)
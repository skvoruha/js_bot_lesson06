const numMin = 0
const numMax = 100
const makeNum = 88
let chance = 10;

function numberBot(numMin, numMax, makeNum, chance){

  function numCheck(){


    if (chance == 0) {
      if(confirm("Попытки закончились, хотите сыграть еще?")) chance = 10
      else {
        return console.log("Игра окончена" );
      }

      // Заменить на prompt, проверить её на true false
    }

    let number = prompt("Выберите число от 1 до 100");

    if (number == null) {
      return console.log("Игра окончена" );
    } else {

      chance--;

      if(!isNumber(number) || number == ""){
        console.log("Введи число!, осталось " + chance + " попыток");
        numCheck()
      }

      else if (number < numMin || number > numMax) {
        console.log("Вы ввели число за пределами заданных чисел, осталось " + chance + " попыток");
        numCheck()
      }

      else if (number > makeNum){
        console.log("Загаданное число меньше, осталось " + chance + " попыток");
        numCheck()
      }

      else if (number < makeNum){
        console.log("Загаданное число больше, осталось " + chance + " попыток");
        numCheck()
      }

      else if (number == makeNum){
              if(confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) chance = 10
          else {
            return console.log("Игра окончена" );
          }
      }
    }
  }

  function isNumber(x){
    return !isNaN(parseFloat(x)) && isFinite(x)
  }

  numCheck()
}

numberBot(numMin, numMax, makeNum, chance)
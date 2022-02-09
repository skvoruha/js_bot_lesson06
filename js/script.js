const numMin = 0
const numMax = 100
let chance = 10;

// функция задвания ранодомного числа принимающая два парметра промежуток чисел
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function numberBot(numMin, numMax, chance){
  const makeNum = getRandomIntInclusive(numMin,numMax)

  function numCheck(){
    console.log("Загаданное число " + makeNum);

    if (chance == 0) {
      if(confirm("Попытки закончились, хотите сыграть еще?")) chance = 10
      else {
        return console.log("Игра окончена" );
      }

      // Заменить на prompt, проверить её на true false
    }

    let number = prompt("Выберите число от 1 до 100");

    if (number == null) {
      return alert("Игра окончена" );
    } else {

      chance--;

      if(!isNumber(number) || number == ""){
        alert("Введи число!, осталось " + chance + " попыток");
        numCheck()
      }

      else if (number < numMin || number > numMax) {
        alert("Вы ввели число за пределами заданных чисел, осталось " + chance + " попыток");
        numCheck()
      }

      else if (number > makeNum){
        alert("Загаданное число меньше, осталось " + chance + " попыток");
        numCheck()
      }

      else if (number < makeNum){
        alert("Загаданное число больше, осталось " + chance + " попыток");
        numCheck()
      }

      else if (number == makeNum){
              if(confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) chance = 10,numberBot(numMin, numMax, chance);
          else {
            return alert("Игра окончена" );
          }
      }
    }
  }

  function isNumber(x){
    return !isNaN(parseFloat(x)) && isFinite(x)
  }

  numCheck()
}

numberBot(numMin, numMax, chance)
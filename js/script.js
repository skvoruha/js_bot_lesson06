const numMin = 0
const numMax = 100

// функция задвания ранодомного числа принимающая два парметра промежуток чисел
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


function numberBot(numMin, numMax){
  const makeNum = getRandomIntInclusive(numMin,numMax)
  console.log(makeNum);

  function numCheck(){

    let number = prompt("Выберите число от 1 до 100");

    if (number == null) {
      return alert("Игра окончена" );
    } else {

      if(!isNumber(number) || number == ""){
        alert("Введи число!");
        numCheck()
      }

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
    }
  }

  function isNumber(x){
    return !isNaN(parseFloat(x)) && isFinite(x)
  }

  numCheck()
}

numberBot(numMin, numMax)


debugger;
let input = document.getElementById("input");

input.addEventListener("input", function() {
  let text = input.value;

  let letterCount = text.trim().split(/[qwertyuiopasdfghjklzxcvbnm]/).length - 1;

  let wordCount = text.match(/\b\S+\b/g) ? text.match(/\b\S+\b/g).length : 0;

  let sentenceCount = text.match(/[^\s](\.|\?|\!)(?!\w)(?<!\.\.)(?<!\?\?)(?<!\!\!)/g) ? text.match(/[^\s](\.|\?|\!)(?!\w)(?<!\.\.)(?<!\?\?)(?<!\!\!)/g).length : 0;

  let numbersCount = text.trim().split(/[1234567890]/).length - 1;

  if(text.length === 0) {
    wordCount = 0;
  }

  let result = document.getElementById("myResult");
  result.innerHTML = "Количество букв: " + letterCount + "<br>" +
                     "Количество слов: " + wordCount + "<br>" +
                     "Количество предложений: " + sentenceCount + "<br>" + "количество цифр:" + numbersCount;
});





function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function change() {
    let body = document.querySelector("body");
    body.style.backgroundColor = getRandomColor();
  }

let button = document.getElementById("as");

button.addEventListener("click", function() {
  change();
});


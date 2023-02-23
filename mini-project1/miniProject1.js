var input = document.getElementById("input");

input.addEventListener("input", function() {
  var text = input.value;

  var letterCount = text.trim().split(/[qwertyuiopasdfghjklzxcvbnm]/).length - 1;

  var wordCount = text.trim().split(/\s+/).length;

  var sentenceCount = text.split(/[.!?]+/).length - 1;

  var numbersCount = text.trim().split(/[1234567890]/).length - 1;

  if(text.length === 0) {
    wordCount = 0;
  }

  var result = document.getElementById("myResult");
  result.innerHTML = "Количество букв: " + letterCount + "<br>" +
                     "Количество слов: " + wordCount + "<br>" +
                     "Количество предложений: " + sentenceCount + "<br>" + "количество цифр:" + numbersCount;
});


function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function change() {
    var body = document.querySelector("body");
    body.style.backgroundColor = getRandomColor();
  }

var button = document.getElementById("as");

button.addEventListener("click", function() {
  change();
});


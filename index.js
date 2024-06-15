function throwDice() {
    var number1 = Math.floor(Math.random() * 6) + 1;
    var randomimg1 = "images/dice_" + number1 + ".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomimg1);

    var number2 = Math.floor(Math.random() * 6) + 1;
    var randomimg2 = "images/dice_" + number2 + ".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randomimg2);

    if (number1 > number2) {
        var stat = document.querySelector("h1");
        stat.innerHTML = "Player 1 Own";
    } else if (number1 < number2) {
        var stat = document.getElementsByTagName("h1")[0];
        stat.textContent = "Player 2 Own";
    } else {
        document.querySelector("h1").innerHTML = "Draw Match";
    }
}

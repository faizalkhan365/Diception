function gameStart() {
    var point_win = new Audio("sounds/point-win.mp3");
    var point_lose = new Audio("sounds/point-lose.mp3");
    var point_draw = new Audio("sounds/point-draw.mp3");
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = "images/player1-dice/p1-dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


    if (randomNumber1 > randomNumber2) {
        document.querySelector("h3").innerText = "🔴YOU WON";
        point_win.play();
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h3").innerText = "COMPUTER WON🔴";
        point_lose.play();
    }
    else {
        document.querySelector("h3").innerText = "🎈It's a Tie🎈"
        point_draw.play();
    }

}
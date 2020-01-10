var secNum = prompt("guess the secret number");
if (secNum === "9" ) {
    alert("Bingo! Correct answer");
}
else if (parseInt(secNum) + 1) {
alert("Close enough to the correct answer");
}
else {
    alert("try again");
}
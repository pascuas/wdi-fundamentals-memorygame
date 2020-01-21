console.log("User flipped queen");
console.log("User flipped king");
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = []
var cardOne = cards[0];
cardsInPlay.push("cardOne");
var cardTwo = cards[2];
cardsInPlay.push("cardTwo");
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

// Creating the deck of cards for array sorting
function createDeck() {
    const suits = ['♠', '♥', '♦', '♣'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({suit, value});
        }
    }
    return deck;
}
// deck shuffling
function shuffleDeck(deck) {
    for (let i = deck.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i +1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}
// Dealing cards
function dealCards(deck) {
    const tableau = Array(7).fill().map(()=> []);
    for (let i = 0; i < 7; i++) {
        for (let j = i; j < 7; j++) {
            tableau[j].push(deck.pop());
        }
    }
    return tableau;
}
// Beginning the game
function startGame() {
    const deck = createDeck();
    shuffleDeck(deck);
    const tableau = dealCards(deck);
    const stock = deck;
    const foundations = Array(4).fill().map(() => []);
    const waste = [];

    return { tableau, stock, foundations, waste };
}
const game = startGame();
console.log(game);
// Check if card can be moved to the foundation
function canMoveToFoundation(card, foundation) {
    if (foundation.length === 0) {
        return card.value === 'A';
    }
    const topCard = foundation[foundation.length - 1];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    return card.suit === topCard.suit && values.indexOf(card.value) ===
    values.indexOf(topCard.value) + 1;
}
// Check if card can be moved to the tableau
function canMoveToTableau(card, tableauPile) {
    if (tablueaPile.length === 0) {
        return card.value === 'K';
    }
    const topCard = tablueaPile[tableauPile.length - 1];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const redSuits = ['♥', '♦'];
  const blackSuits = ['♠', '♣'];
  return (
    (redSuits.includes(card.suit) && blackSuits.includes(topCard.suit)
||
    blackSuits.includes(card.suit) && redSuits.includes(topCard.suit))
&&
    values.indexOf(card.value) === values.indexOf(topCard.value) - 1
    );
}
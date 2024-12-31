class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
        this.faceUp = false;
    }
    flip() {
        this.faceUp = !this.faceUp;
    }
    getSuitSymbol() {
        // Convert suit name to symbol
        const symbols = {
            'hearts': '♥',
            'diamonds': '♦',
            'clubs': '♣',
            'spades': '♠'
        };
        return symbols[this.suit];
    }

    createCardElement() {
        const card = document.createElement('div');
        card.className = `card ${this.suit}`;
        
        if (this.faceUp) {
            card.innerHTML = `
                <div class="cardContent">
                    <div class="card-value top-value">${this.value}</div>
                    <div class="center-suit">${this.getSuitSymbol()}</div>
                    <div class="card-value bottom-value">${this.value}</div>
                </div>
            `;
        } else {
            card.classList.add('facedown');
        }
        
        return card;
    }
}
// Creating the deck of cards for array sorting
class Deck {
    constructor() {
        this.cards = this.createDeck();
    }
    createDeck() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const deck = [];
    
    for (let suit of suits) {
        for (let value of values) {
            deck.push(new Card(suit, value));
        }
    }
    return deck;
}
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
function flipTopCards(tableau) {
    tableau.forEach(pile => {
        if (pile.length > 0) {
            pile[pile.length - 1].flip();
        }
    });
}
function updateTableau(tableau) {
    tableau.forEach((pile, i) => {
        const pileElement = document.getElementById(`tableau-${i}`);
        pileElement.innerHTML = '';
        pile.forEach(card => {
            pileElement.appendChild(card.createCardElement());
        });
    });
}

function updateFoundations(foundations) {
    foundations.forEach((pile, i) => {
        const pileElement = document.getElementById(`foundation-${i}`);
        pileElement.innerHTML = '';
        if (pile.length > 0) {
            pileElement.appendChild(pile[pile.length - 1].createCardElement());
        }
    });
}

function updateStock(stock) {
    const stockElement = document.getElementById('stock');
    stockElement.innerHTML = stock.length > 0 ? '<div class="card facedown"></div>' : '';
}

function updateWaste(waste) {
    const wasteElement = document.getElementById('waste');
    wasteElement.innerHTML = '';
    if (waste.length > 0) {
        wasteElement.appendChild(waste[waste.length - 1].createCardElement());
    }
}

function updateGameBoard(game) {
    updateTableau(game.tableau);
    updateFoundations(game.foundations);
    updateStock(game.stock);
    updateWaste(game.waste);
}
// Beginning the game
function startGame() {
    const deck = new Deck().cards;
    shuffleDeck(deck);
    const tableau = dealCards(deck);
    flipTopCards(tableau);
    const stock = deck;
    const foundations = Array(4).fill().map(() => []);
    const waste = [];

    return { tableau, stock, foundations, waste };
}
const game = startGame();
updateGameBoard(game);
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
    if (tableauPile.length === 0) {
        return card.value === 'K';
    }
    const topCard = tableauPile[tableauPile.length - 1];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const redSuits = ['hearts', 'diamonds'];
  const blackSuits = ['spades', 'clubs'];
  return (
    (redSuits.includes(card.suit) && blackSuits.includes(topCard.suit)
||
    blackSuits.includes(card.suit) && redSuits.includes(topCard.suit))
&&
    values.indexOf(card.value) === values.indexOf(topCard.value) - 1
    );
}
// Ability to move cards between piles
function moveCard(fromPile, toPile, cardIndex) {
    const movedCards = fromPile.splice(cardIndex);
    toPile.push(...movedCards);
    
    if (fromPile.length > 0 && !fromPile[fromPile.length - 1].faceUp) {
        fromPile[fromPile.length - 1].flip();
    }

    updateGameBoard(game);
}
function drawCard(game) {
    if (game.stock.length > 0) {
        const card = game.stock.pop();
        card.flip();
        game.waste.push(card);
    } else if (game.waste.length > 0) {
        game.stock = game.waste.reverse();
        game.waste = [];
        game.stock.forEach(card => card.flip());
    }
    updateGameBoard(game);
}
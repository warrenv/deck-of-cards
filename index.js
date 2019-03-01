const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
const suits = ['H', 'D', 'C', 'S']

const fromSuit = suit => cards.map(c => [c, suit])
export const createDeck = () => suits.reduce((deck, suit) => [...deck, ...fromSuit(suit)], [])
const getRandomIndex = i => Math.floor(Math.random() * i)

export const shuffleDeck = () => {
  const deck = createDeck()
  let currentIndex = deck.length
  let tempVal = 0
  let randomIndex = 0

  while (currentIndex !== 0) {
    randomIndex = getRandomIndex(currentIndex)
    currentIndex -= 1

    tempVal = deck[currentIndex]
    deck[currentIndex] = deck[randomIndex]
    deck[randomIndex] = tempVal
  }

  return deck
}

console.log(shuffleDeck())

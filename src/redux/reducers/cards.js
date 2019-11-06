import { FLIP_CARD, RESET_FLIPPED_CARDS, UNFLIP_CARDS } from "../actionTypes";
import { shuffle } from '../../utils'
import { easy } from '../../cards.js'

const initialState = {
  cards: shuffle(easy),
  flippedCards: [],
  attempts: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FLIP_CARD: {
      const { index } = action.payload;
      return {
        ...state,
        cards: state.cards.map((card, i) => i === index ? { ...card, flipped: true } : { ...card }),
        flippedCards: [...state.flippedCards, index]
      };
    }
    case RESET_FLIPPED_CARDS: {
      return {
        ...state,
        flippedCards: [],
        attempts: state.attempts + 1
      };
    }
    case UNFLIP_CARDS: {
      const { flippedCards, cards } = state
      return {
        ...state,
        cards: cards.map((card, i) => i === flippedCards[0] || i === flippedCards[1] ? { ...card, flipped: false } : { ...card }),
        flippedCards: [],
        attempts: state.attempts + 1
      };
    }
    default:
      return state;
  }
}

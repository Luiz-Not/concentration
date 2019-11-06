import { FLIP_CARD, RESET_FLIPPED_CARDS, UNFLIP_CARDS, SET_GAME_MODE } from "./actionTypes";
import { getCards, getFlippedCards, getAttempts } from "./selectors"

export const flipCard = index => (dispatch, getState) => {
  const state = getState()
  const flippedCards = getFlippedCards(state)

  if (flippedCards.length === 2) {
    return false
  }

  dispatch({
    type: FLIP_CARD,
    payload: {
      index
    }
  })
  dispatch(checkCards())
}

export const setGameMode = mode => ({
  type: SET_GAME_MODE,
  payload: {
    mode
  }
})

const checkCards = () => (dispatch, getState) => {
  const state = getState()
  const cards = getCards(state)
  const flippedCards = getFlippedCards(state)

  if (flippedCards.length === 2) {
    if (JSON.stringify(cards[flippedCards[0]]) === JSON.stringify(cards[flippedCards[1]])) {
      dispatch({ type: RESET_FLIPPED_CARDS })
      dispatch(checkWin())
    } else {
      setTimeout(() => {
        dispatch({ type: UNFLIP_CARDS })
      }, 1000)
    }
  }
}

const checkWin = () => (dispatch, getState) => {
  const state = getState()
  const cards = getCards(state)
  const attempts = getAttempts(state)
  const flippedCards = cards.filter(card => card.flipped === true)

  if (flippedCards.length === 12) {
    setTimeout(() => {
      alert(`Ganhou arrombado! ${attempts} tentativas`)
    }, 500) 
  }
}

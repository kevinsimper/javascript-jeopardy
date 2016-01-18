export const SHOW_CARD = 'SHOW_CARD'
export const CLOSE_QUESTION = 'CLOSE_QUESTION'

export function showCard (category, question) {
  return {
    type: SHOW_CARD,
    category,
    question
  }
}

export function closeQuestion () {
  return {
    type: CLOSE_QUESTION
  }
}

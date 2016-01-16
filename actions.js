export const SHOW_CARD = 'SHOW_CARD'

export function showCard (id) {
  return {
    type: SHOW_CARD,
    id
  }
}

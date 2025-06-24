import { XCharacterList } from './components/x-character-list'
import { XCharacterDetail } from './components/x-character-detail'

customElements.define('x-character-list', XCharacterList)
customElements.define('x-character-detail', XCharacterDetail)

// Navigation logic
document.addEventListener('DOMContentLoaded', () => {
  const characterList = document.getElementById(
    'character-list',
  ) as XCharacterList
  const characterDetail = document.getElementById(
    'character-detail',
  ) as XCharacterDetail

  // Listen for character selection
  document.addEventListener('character-selected', (event: Event) => {
    const customEvent = event as CustomEvent
    const character = customEvent.detail

    // Hide list, show detail
    characterList.style.display = 'none'
    characterDetail.style.display = 'block'

    // Set the character data
    characterDetail.character = character
  })

  // Listen for back to list
  document.addEventListener('back-to-list', () => {
    // Hide detail, show list
    characterDetail.style.display = 'none'
    characterList.style.display = 'block'
  })
})

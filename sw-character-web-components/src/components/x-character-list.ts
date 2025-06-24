const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      display: block;
      font-family: var(--font-family, Arial, sans-serif);
      color: var(--text-color, #333);
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 12px 16px;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    
    li:hover {
      background-color: #f5f5f5;
    }
    
    li:active {
      background-color: #e0e0e0;
    }
  </style>
  
  <ul id="character-list">
  </ul>
`

export class XCharacterList extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot?.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.render()
  }

  render() {
    const characterList = this.shadowRoot?.querySelector('#character-list')

    if (!characterList) return

    characterList.innerHTML = ''

    fetch('https://swapi.info/api/people')
      .then((response) => response.json())
      .then((data) => {
        data.forEach((character: Character) => {
          const li = document.createElement('li')
          li.textContent = character.name

          li.addEventListener('click', () => {
            const event = new CustomEvent('character-selected', {
              detail: character,
              bubbles: true,
              composed: true,
            })
            this.dispatchEvent(event)
          })

          characterList.appendChild(li)
        })
      })
      .catch((error) => {
        console.error('Error fetching characters:', error)
        const li = document.createElement('li')
        li.textContent = 'Failed to load characters.'
        characterList.appendChild(li)
      })
  }
}

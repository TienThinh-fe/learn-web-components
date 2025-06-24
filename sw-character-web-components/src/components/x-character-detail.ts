const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      display: block;
      font-family: var(--font-family, Arial, sans-serif);
      color: var(--text-color, #333);
    }

    .back-button {
      background: #007bff;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 1em;
      font-size: 14px;
    }

    .back-button:hover {
      background: #0056b3;
    }

    h2 {
      margin: 0;
      font-size: 1.5em;
    }

    p {
      margin: 0.5em 0;
    }

    strong {
      font-weight: bold;
    }

    span {
      color: var(--text-color, #333);
    }
  </style>

  <div>
    <button class="back-button" id="back-button">← Back to List</button>
    <h2 id="character-name"></h2>
    <p><strong>Height:</strong> <span id="character-height"></span></p>
    <p><strong>Mass:</strong> <span id="character-mass"></span></p>
    <p><strong>Hair Color:</strong> <span id="character-hair-color"></span></p>
    <p><strong>Skin Color:</strong> <span id="character-skin-color"></span></p>
    <p><strong>Eye Color:</strong> <span id="character-eye-color"></span></p>
    <p><strong>Birth Year:</strong> <span id="character-birth-year"></span></p>
  </div>
`

export class XCharacterDetail extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot?.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.render()
    this.setupEventListeners()
  }

  private setupEventListeners() {
    const backButton = this.shadowRoot?.querySelector('#back-button')
    backButton?.addEventListener('click', () => {
      const event = new CustomEvent('back-to-list', {
        bubbles: true,
        composed: true,
      })
      this.dispatchEvent(event)
    })
  }

  set character(character: Character) {
    this._character = character
    this.render()
  }

  private _character: Character | null = null

  private render() {
    if (!this._character) return

    const nameElement = this.shadowRoot?.querySelector('#character-name')
    const heightElement = this.shadowRoot?.querySelector('#character-height')
    const massElement = this.shadowRoot?.querySelector('#character-mass')
    const hairColorElement = this.shadowRoot?.querySelector(
      '#character-hair-color',
    )
    const skinColorElement = this.shadowRoot?.querySelector(
      '#character-skin-color',
    )
    const eyeColorElement = this.shadowRoot?.querySelector(
      '#character-eye-color',
    )
    const birthYearElement = this.shadowRoot?.querySelector(
      '#character-birth-year',
    )

    if (nameElement) nameElement.textContent = this._character.name
    if (heightElement) heightElement.textContent = this._character.height
    if (massElement) massElement.textContent = this._character.mass
    if (hairColorElement)
      hairColorElement.textContent = this._character.hair_color
    if (skinColorElement)
      skinColorElement.textContent = this._character.skin_color
    if (eyeColorElement) eyeColorElement.textContent = this._character.eye_color
    if (birthYearElement)
      birthYearElement.textContent = this._character.birth_year
  }
}

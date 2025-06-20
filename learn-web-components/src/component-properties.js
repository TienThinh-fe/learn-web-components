const template = document.createElement('template')

template.innerHTML = `
  <p></p>
`

export class CustomComponentWithProp extends HTMLElement {
  static get observedAttributes() {
    return ['name']
  }

  set name(value) {
    this._name = value
    this.nameElement.textContent = this._name
  }

  get name() {
    return this._name
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.nameElement = this.shadowRoot.querySelector('p')
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'name') {
      this.name = newValue
    }
  }
}

const template = document.createElement('template')
template.innerHTML = `
  <button></button>
  <div>
    <slot></slot>
  </div>
`

export class XDropdown extends HTMLElement {
  static get observedAttributes() {
    return ['title']
  }

  set title(value) {
    this._title = value
    this.shadowRoot.querySelector('button').textContent = this._title
  }

  get title() {
    return this._title
  }

  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.shadowRoot.querySelector('button').textContent = this._title

    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      this.toggle()
    })

    this.shadowRoot.querySelector('div').style.display = 'none'
  }

  toggle() {
    if (this._title === 'Collapse') {
      this.title = 'Expand'
    } else {
      this.title = 'Collapse'
    }

    const dropdown = this.shadowRoot.querySelector('div')
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block'
    } else {
      dropdown.style.display = 'none'
    }

    const event = new CustomEvent('toggle', {
      detail: { title: this._title },
    })

    this.dispatchEvent(event)
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') {
      this.title = newValue
    }
  }
}

const template = document.createElement('template')
template.innerHTML = `
  <button>Click me</button>
`

export class CustomComponentWithEvent extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      this.handleClick()
    })
  }

  handleClick() {
    const event = new CustomEvent('custom-click', {
      detail: { message: 'Button clicked!' },
    })
    this.dispatchEvent(event)
  }
}

const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      --primary-color: #6200ea;
    }

    p {
      color: var(--primary-color);
    }

    ::slotted(*) {
      color: yellow;
      font-weight: bold;
    }
  </style>

  <p>Paragraph with default style</p>
  <p part="custom-part">Paragraph with custom part style</p>
  <slot></slot>
`

export class ParagraphPartStyle extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    console.log('ParagraphPartStyle connected')
  }

  disconnectedCallback() {
    console.log('ParagraphPartStyle disconnected')
  }
}

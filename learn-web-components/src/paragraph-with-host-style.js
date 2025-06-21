const template = document.createElement('template')

template.innerHTML = `
<style>
  :host {
    --primary-color: #6200ea;
  }

  p {
    color: var(--primary-color);
  }
</style>
  <p>Paragraph with host style</p>
`

export class ParagraphWithHostStyle extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    console.log('ParagraphWithHostStyle connected')
  }

  disconnectedCallback() {
    console.log('ParagraphWithHostStyle disconnected')
  }
}

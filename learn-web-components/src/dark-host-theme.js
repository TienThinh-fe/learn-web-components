const template = document.createElement('template')

template.innerHTML = `
<style>
:host([theme='dark']) p {
  color: white;
  background-color: black;
}
</style>

<p>Dark Host Theme Paragraph</p>
`

export class DarkHostTheme extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    console.log('DarkHostTheme connected')
  }

  disconnectedCallback() {
    console.log('DarkHostTheme disconnected')
  }
}

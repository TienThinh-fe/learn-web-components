const template = document.createElement('template')

template.innerHTML = `
  <button>Change Style</button>
`

export class ButtonChangeStyle extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      this.changeStyle()
    })
  }

  changeStyle() {
    const styles = getComputedStyle(document.documentElement)

    const primaryColor = styles.getPropertyValue('--primary-color')

    const body = document.querySelector('body')

    body.style.setProperty('background-color', primaryColor)
  }
}

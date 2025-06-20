// const template = document.createElement('template')
// template.innerHTML = `
//   <div>
//     <div class='title'>
//       <slot name="title"></slot>
//     </div>
//     <slot></slot>
//   </div>
// `

// class HelloWorldComponent extends HTMLElement {
//   constructor() {
//     super()
//     this.attachShadow({ mode: 'open' })
//     this.shadowRoot.appendChild(template.content.cloneNode(true))
//   }
// }

// customElements.define('hello-world', HelloWorldComponent)

const template = document.createElement('template')
template.innerHTML = `
  <button>Dropdown</button>
  <div>
    <slot></slot>
  </div>
`

class XDropdown extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      this.toggle()
    })

    this.shadowRoot.querySelector('div').style.display = 'none'
  }

  toggle() {
    const dropdown = this.shadowRoot.querySelector('div')
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block'
    } else {
      dropdown.style.display = 'none'
    }
  }
}

customElements.define('x-dropdown', XDropdown)

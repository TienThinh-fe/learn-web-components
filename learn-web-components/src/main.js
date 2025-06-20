import { XDropdown } from './x-dropdown.js'
import { CustomComponentWithProp } from './component-properties.js'
import { CustomComponentWithEvent } from './component-event.js'

customElements.define('x-dropdown', XDropdown)
customElements.define('custom-component-with-prop', CustomComponentWithProp)
customElements.define('custom-component-with-event', CustomComponentWithEvent)

// const cmp = document.querySelector('custom-component-with-prop')
// cmp.name = 'John Doe'

// const cmpEvent = document.querySelector('custom-component-with-event')
// cmpEvent.addEventListener('custom-click', (e) => {
//   console.log(e)
// })

const dropdown = document.querySelector('x-dropdown')
dropdown.addEventListener('toggle', (e) => {
  console.log(e.detail.title)
})

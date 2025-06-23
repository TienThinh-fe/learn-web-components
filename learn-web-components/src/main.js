import { XDropdown } from './x-dropdown.js'
import { CustomComponentWithProp } from './component-properties.js'
import { CustomComponentWithEvent } from './component-event.js'
import { ButtonChangeStyle } from './button-change-style.js'
// import { ParagraphWithHostStyle } from './paragraph-with-host-style.js'
// import { ParagraphPartStyle } from './paragraph-part-style.js'
import { DarkHostTheme } from './dark-host-theme.js'

// customElements.define('x-dropdown', XDropdown)
// customElements.define('custom-component-with-prop', CustomComponentWithProp)
// customElements.define('custom-component-with-event', CustomComponentWithEvent)
// customElements.define('button-change-style', ButtonChangeStyle)
// customElements.define('paragraph-with-host-style', ParagraphWithHostStyle)
// customElements.define('paragraph-part-style', ParagraphPartStyle)
customElements.define('dark-host-theme', DarkHostTheme)

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

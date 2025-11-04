import './styles.scss'
import Button from './components/Button'

document.querySelector('#app').innerHTML = `
  <section>
    ${Button()}
    ${Button()}
    ${Button()}
  </section>
`
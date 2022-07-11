// const message1 = 'Hello World!!'
const message = 'Hello World React app!!'
const body = document.getElementById('body')

//vanilla js

// const h1 = document.createElement('h1')
// h1.textContent = message1
// document.getElementById('root').appendChild(h1)


const h3 = document.createElement(h3)
body.textContent = 'welcome to my world do not fear!!'
body.appendChild(h3)
const app = <h1>{message}</h1>

//react
// ReactDOM.render(<h1>{message}</h1>, document.getElementById('root'))
//or
ReactDOM.render(app, document.getElementById('root'))
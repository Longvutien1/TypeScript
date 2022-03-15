import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  const [myName, setMyName] = useState("Vũ Tiến Long");
  const [status, setStatus] = useState(true);
  const [info, setInfor] = useState({id:1, name:"Long chanh thôn"});
  const [products, setProducts] = useState([
    { id: 1, name: "Product A" },
    { id: 2,  name: "Product B" },
    { id: 3,name: "Product C" }
  ]
  )
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App

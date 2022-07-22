import logo from './logo.svg';
import './App.css';
import { useEffect } from "react"

function App() {
  useEffect(() => {
    fetch("/movies")
    .then((r) => r.json())
    .then(movies => console.log(movies))
  })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
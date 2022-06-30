import './App.css';
import MainComponents from './Components/MainComponents';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <MainComponents />
      </Router>
    </div>
  );
}

export default App;

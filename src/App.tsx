import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { Home } from "./views/Home.tsx";
import './assets/styles/main.scss';
import { Form } from "./views/Form.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/form" element={<Form />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

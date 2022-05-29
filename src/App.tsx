import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { DefaultNavbar } from './components/navbar/DefaultNavbar.tsx'
import { Home } from "./views/Home.tsx";

function App() {
  return (
    <div className="App">
      <DefaultNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

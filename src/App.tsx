import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { Home } from "./views/Home.tsx";
import './assets/styles/main.scss';
import { SueForm } from "./views/SueForm.tsx";
import { FeedbackMain } from "./components/SueForm/FeedbackMain.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/form" element={<SueForm />}/>
          <Route path="/formFeedback" element={<FeedbackMain />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

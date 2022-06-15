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
import { Login } from "./components/login/Login.tsx";
import { SuitsTemplates } from "./components/suitsTemplates/SuitsTemplates.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/form" element={<SueForm />}/>
          <Route path="/formFeedback" element={<FeedbackMain />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/suitsTemplates" element={<SuitsTemplates />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

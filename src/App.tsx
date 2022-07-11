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
import { TemplateForm } from "./components/suitsTemplates/TemplateForm.tsx";
import { SuitsTable } from "./components/lawyerModule/SuitsTable.tsx";
import { EditedClaimForm } from "./components/lawyerModule/EditedClaimForm.tsx";


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
          <Route path="/templateForm" element={<TemplateForm />}/>
          <Route path="/lawyerClaims" element={<SuitsTable />}/>
          <Route path="/EditedClaimForm/:id" element={<EditedClaimForm />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

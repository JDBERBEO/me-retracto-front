import React from "react";
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
import { AdminRoutes } from "./router/AdminRoutes.tsx";
import { LawyerRoutes } from "./router/LawyerRoutes.tsx";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/form" element={<SueForm />}/>
          <Route path="/formFeedback" element={<FeedbackMain />}/>
          <Route path="/login" element={<Login />}/>
          <Route element={<LawyerRoutes /> || <AdminRoutes />}>
            <Route path="/lawyerClaims" element={<SuitsTable />}/>
            <Route path="/EditedClaimForm/:id" element={<EditedClaimForm />}/>
          </Route>
          <Route element={<AdminRoutes />}>
            <Route path="/suitsTemplates" element={<SuitsTemplates />}/>
            <Route path="/templateForm" element={<TemplateForm />}/>  
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

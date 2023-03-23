
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import MentionLegal from "./pages/MentionLegales";
import Main from "./pages/Main"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import AnnuairePro from "./pages/AnnuairePro"
import Ressources1 from "./pages/Ressources-p1";
import Ressources2 from "./pages/Ressources-p2";
import Ressources3 from "./pages/Ressources-p3";
import Ressources4 from "./pages/Ressources-p4";
import Ressources5 from "./pages/Ressources-p5";
import Test from "./pages/test";

// import Ressources6 from "./pages/Ressources-p6";


function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" component={Main} exact/>
        <Route path="/mention-legales" component={MentionLegal} exact/>
        <Route path="/donnees-personnelles" component={PrivacyPolicy} exact/>
        <Route path="/annuaire-des-pro" component={AnnuairePro} exact/>
        <Route path="/resources-batiment" component={Ressources1} exact/>
        <Route path="/resources-education-aux-economies-energie" component={Ressources2} exact/>
        <Route path="/resources-industrie" component={Ressources3} exact/>
        <Route path="/resources-TPE-PME-PMI" component={Ressources4} exact/>
        <Route path="/resources-transports" component={Ressources5} exact/>
        <Route path="/test" component={Test} exact/>
        {/* <Route path="/resources-numerique" component={Ressources6} exact/> */}
      </BrowserRouter>
    </>
  );
}

export default App;

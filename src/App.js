
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import MentionLegal from './pages/MentionLegales';
import Main from './pages/Main'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AnnuairePro from './pages/AnnuairePro'


function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" component={Main} exact/>
        <Route path="/mention-legales" component={MentionLegal} exact/>
        <Route path="/donnees-personnelles" component={PrivacyPolicy} exact/>
        <Route path="/annuaire-des-pro" component={AnnuairePro} exact/>
      </BrowserRouter>
    </>
  );
}

export default App;

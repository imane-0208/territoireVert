
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import MentionLegal from './pages/MentionLegales';
import Main from './pages/Main'
import PrivacyPolicy from './pages/PrivacyPolicy'


function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" component={Main} exact/>
        <Route path="/mention-legales" component={MentionLegal} exact/>
        <Route path="/donnees-personnelles" component={PrivacyPolicy} exact/>
      </BrowserRouter>
    </>
  );
}

export default App;

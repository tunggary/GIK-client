import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { gitUrl } from './styles/styles';
import Header from './components/Header';
import Main from './pages/Main';
import Exhibition from './pages/Exhibition';
import ExhibitionDetail from './pages/ExhibitionDetail';
import Goods from './pages/Goods';
import Community from './pages/Community';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={`${gitUrl}`} component={Main} />
        <Route exact path={`${gitUrl}/exhibition`} component={Exhibition} />
        <Route exact path={`${gitUrl}/exhibitionDetail`} component={ExhibitionDetail} />
        <Route exact path={`${gitUrl}/goods`} component={Goods} />
        <Route exact path={`${gitUrl}/community`} component={Community} />
      </Switch>
    </BrowserRouter>
  );
}

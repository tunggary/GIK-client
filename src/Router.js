import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { gitUrl } from './styles/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Exhibition from './pages/Exhibition';
import ExhibitionDetail from './pages/ExhibitionDetail';
import Goods from './pages/Goods';
import Community from './pages/Community';
import styled from 'styled-components';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <PageContainer>
        <Switch>
          <Route exact path={`${gitUrl}`} component={Main} />
          <Route exact path={`${gitUrl}/exhibition`} component={Exhibition} />
          <Route exact path={`${gitUrl}/exhibitionDetail`} component={ExhibitionDetail} />
          <Route exact path={`${gitUrl}/goods`} component={Goods} />
          <Route exact path={`${gitUrl}/community`} component={Community} />
        </Switch>
      </PageContainer>
      <Footer />
    </BrowserRouter>
  );
}

const PageContainer = styled.div`
  min-height: calc(100vh - 14rem); //header 4rem, footer 10rem
  @media ${(props) => props.theme.mobile} {
    min-height: calc(100vh - 13rem); //footer 13rem
    padding-top: 4rem;
  }
`;

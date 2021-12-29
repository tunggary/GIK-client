import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/styles';
import theme from './styles/theme';
import Header from './components/Header';
import Logo from './components/Logo';
import Router from './Router';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <Logo />
        <Contents>
          <Header />
          <Router />
        </Contents>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  font-family: 'Futura';
  width: 100%;
`;

const Contents = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
`;

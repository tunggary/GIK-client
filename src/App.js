import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/styles';
import theme from './styles/theme';
import Logo from './components/Logo';
import Router from './Router';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <Logo />
        <Contents>
          <Router />
        </Contents>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Contents = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
`;

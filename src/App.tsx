import { Feed } from './features/feed/pages';
import { GlobalStyle } from './shared/global/styles/styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './shared/global/styles/themes/default';

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Feed />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}


import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <Header />

        <RoutesApp />
      </ThemeProvider>
    </BrowserRouter>
  )
}

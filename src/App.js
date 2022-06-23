import MainContainer from "./components/MainContainer";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import content from "./components/Content";
import Footer from "./components/Footer";
function App() {

  const theme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333'
    },
    mobile: '768px',
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <MainContainer
          content={content}
        />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

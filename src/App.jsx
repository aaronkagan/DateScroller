import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Footer>
        All images by <a href="https://unsplash.com/@dtolokonov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dmytro Tolokonov</a>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Footer = styled.div``;

export default App;

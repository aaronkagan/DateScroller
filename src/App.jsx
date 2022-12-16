import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components";
import { imageData } from "./data/imageData";
import PhotoCard from "./components/PhotoCard";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      {imageData.map((photo) => {
        console.log(photo);
        return <PhotoCard key={photo.id} photo={photo} />;
      })}
      <Footer>
        All images by <a href="https://unsplash.com/@dtolokonov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dmytro Tolokonov</a>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const Footer = styled.div``;

export default App;

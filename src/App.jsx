import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components";
import { imageData } from "./data/imageData";
import PhotoCard from "./components/PhotoCard";
import DynamicDate from "./components/DynamicDate";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <DynamicDate />
      {imageData.map((photo) => {
        return <PhotoCard key={photo.id} photo={photo} />;
      })}
      <Footer>
        All images by <a href="https://unsplash.com/@dtolokonov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dmytro Tolokonov</a>
        <p>Disclaimer: The years are to demonstrate the app's functionality and do not accurately represent the year the photo was taken</p>
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

const Footer = styled.div`
  margin-bottom: 20px;
  text-align: center;
  p {
    margin-top: 10px;
    padding: 0 10px;
  }
`;

export default App;

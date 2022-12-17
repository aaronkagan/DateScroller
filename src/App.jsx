import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components";
import { imageData } from "./data/imageData";
import PhotoCard from "./components/PhotoCard";
import DynamicDate from "./components/DynamicDate";
import badge from "./assets/images/linkedin-badge.png";
import { useState } from "react";

function App() {
  const [date, setDate] = useState(2022);
  return (
    <Wrapper>
      <GlobalStyle />
      <DynamicDate date={date} />
      {imageData.map((photo) => {
        return <PhotoCard key={photo.id} photo={photo} setDate={setDate} />;
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
  gap: 20px;
  padding-bottom: 150px;
  text-align: center;
  p {
    margin-top: 10px;
    padding: 0 10px;
    width: 300px;
    margin-bottom: 20px;
  }
`;

const CreatedBy = styled.p`
  font-weight: bold;
`;

const Img = styled.img`
  width: 300px;
`;

export default App;

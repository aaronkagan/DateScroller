import styled from "styled-components";

const PhotoCard = ({ photo }) => {
  return (
    <Wrapper>
      <h4>{photo.year}</h4>
      <Img src={photo.imageSrc} alt={photo.alt} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid var(--primary-color);
  display: inline-block;
  padding: 20px;
`;

const Img = styled.img`
  width: 300px;
`;

export default PhotoCard;

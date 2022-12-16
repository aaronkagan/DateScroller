import styled from "styled-components";

const PhotoCard = ({ photo }) => {
  return (
    <Wrapper>
      <h4>{photo.year}</h4>
      <img src={photo.imageSrc} alt={photo.alt} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid var(--primary-color);
  padding: 20px;
`;

export default PhotoCard;

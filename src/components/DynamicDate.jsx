import styled from "styled-components";

const DynamicDate = () => {
  return <Wrapper>{"PlaceHolder"}</Wrapper>;
};

const Wrapper = styled.div`
  border: 1px solid var(--primary-color);
  padding: 10px 20px;
  position: sticky;
  background: white;
  top: 20px;
`;

export default DynamicDate;

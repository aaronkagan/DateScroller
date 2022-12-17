import styled from "styled-components";

const DynamicDate = ({ date }) => {
  return <Wrapper>{date}</Wrapper>;
};

const Wrapper = styled.div`
  border: 1px solid var(--primary-color);
  padding: 10px 20px;
  position: sticky;
  background: white;
  top: 20px;
`;

export default DynamicDate;

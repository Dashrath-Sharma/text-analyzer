import styled from "styled-components";

const Container2 = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  margin-right: 0.2em;
  font-weight: 500;
  color: #a4a4a4;
  display: flex;
  align-items: center;
`;
const Value = styled.p`
  margin: 0;
  margin-top: 0.2em;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export default function ReadTimeNLongestWord({ title, value }) {
  return (
    <Container2>
      <Title>{title}:</Title>
      <Value>{value}</Value>
    </Container2>
  );
}

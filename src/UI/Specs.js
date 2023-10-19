import styled from "styled-components";

const Title = styled.p`
  margin: 0;
  font-weight: 500;
  color: #a4a4a4;
`;
const Value = styled.p`
  margin: 0;
  margin-top: 0.2em;
  font-weight: bold;
`;

export default function Specs({ title, value }) {
  return (
    <div>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </div>
  );
}

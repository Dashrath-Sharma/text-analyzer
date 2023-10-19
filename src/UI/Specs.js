import styled from "styled-components";

export default function Specs({ title, value }) {
  const Title = styled.p`
    margin: 0;
  `;
  const Value = styled.p`
    margin: 0;
  `;
  return (
    <div>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </div>
  );
}

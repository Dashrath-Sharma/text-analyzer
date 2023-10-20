import styled from "styled-components";
import Specs from "./Specs";

const Container = styled.div`
  background: #fff;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  padding: 0.6em;
  display: flex;
  justify-content: space-around;
`;

export default function DisplayCounters() {
  return (
    <Container>
      <Specs title="Words" value="0" />
      <Specs title="Characters" value="0" />
      <Specs title="Sentences" value="0" />
      <Specs title="Pragraphs" value="0" />
      <Specs title="Pronouns" value="0" />
    </Container>
  );
}

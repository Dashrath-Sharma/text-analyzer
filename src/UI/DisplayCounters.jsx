import styled from "styled-components";
import Specs from "./Specs";
import { useContext } from "react";
import TextContext from "../context/TextContext";

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
  const { textDetails } = useContext(TextContext);
  const {Words, Characters, Sentences, Paragraphs, Pronouns } = textDetails;
  return (
    <Container>
      <Specs title="Words" value={Words} />
      <Specs title="Characters" value={Characters} />
      <Specs title="Sentences" value={Sentences} />
      <Specs title="Paragraphs" value={Paragraphs} />
      <Specs title="Pronouns" value={Pronouns} />
    </Container>
  );
}

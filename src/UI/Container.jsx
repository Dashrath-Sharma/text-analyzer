import styled from "styled-components";
import ReadTimeNLongestWord from "./ReadTimeNLongestWord";
import { useContext } from "react";
import TextContext from '../context/TextContext'

const Container1 = styled.div`
  background: #fff;
  margin-bottom: 2em;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  padding: 0.6em;
  display: flex;
  justify-content: space-around;
`;

export default function Container() {
  const { textDetails } = useContext(TextContext);
  const { LongestWord, ReadingTime } = textDetails;
  return (
    <Container1>
      <ReadTimeNLongestWord title="Average Reading Time" value={LongestWord} />
      <ReadTimeNLongestWord title="Longest word" value={ReadingTime} />
    </Container1>
  );
}

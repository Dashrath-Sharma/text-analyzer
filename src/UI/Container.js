import styled from "styled-components";
import ReadTimeNLongestWord from "./ReadTimeNLongestWord";

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

export default function Container(){
return(
  <Container1>
    <ReadTimeNLongestWord title="Average Reading Time" value="" />
    <ReadTimeNLongestWord title="Longest word" value="" />
  </Container1>
)
}
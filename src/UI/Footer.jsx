import styled from "styled-components";

const StyledFooter = styled.div`
  padding: 1.1em 3em;
  background: #f1f7ff;
  color: #2e2f2f;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -0.3px 0.9px rgba(0, 0, 0, 0.1),
    0 -1.6px 3.6px rgba(0, 0, 0, 0.1);
`;

const StyledAuthor = styled.div`
  font-size: 1.2em;
  font-weight: 500;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledAuthor>Built by Dashrath Sharma</StyledAuthor>
    </StyledFooter>
  );
}

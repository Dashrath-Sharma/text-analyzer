import { FiLinkedin } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import styled from "styled-components";

const Nav = styled.div`
  padding: 1.1em 3em;
  background: #f1f7ff;
  color: #2e2f2f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.3px 0.9px rgba(0, 0, 0, 0.1), 0 1.6px 3.6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Child = styled.div`
  margin-left: 1.5em;
`;

export default function Header() {
  return (
    <Nav>
      <Logo>Text-Analyzer</Logo>
      <SocialIcons>
        <Child>
          <BsGithub />
        </Child>
        <Child>
          <FiLinkedin />
        </Child>
      </SocialIcons>
    </Nav>
  );
}

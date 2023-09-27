import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  height: 18.5rem;

  display: flex;
  justify-content: space-between;

  background: ${props => props.theme["gray-800"]};
`;

export const Logo = styled.img`
  width: 9.25rem;
  margin-bottom: 5.5rem;
`;

export const BackgroundImage = styled.img`
  max-width: 25rem;
`;
import { styled } from "styled-components";

export const ProfileContainer = styled.div`
  background-color: ${props => props.theme["gray-800"]};
  
  border: none;
  border-radius: 10px;

  filter: drop-shadow(0px 2px 28px #00000033);

  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 2rem 2.5rem;
`;

export const ProfileImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;

  border: none;
  border-radius: 8px;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
`;

export const ProfileContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  width: 100%;
`;

export const ProfileTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.3;
  color: ${props => props.theme['gray-100']};
`;

export const ProfileLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1.6;
  color: ${props => props.theme['blue-500']};
`

export const ProfileContentBody = styled.span`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const ProfileContentFooter = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
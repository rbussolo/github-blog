import { styled } from "styled-components";

export const PostContainer = styled.div`
  max-width: 56rem;
  padding-left: 1rem;
  padding-right: 1rem;

  margin-left: auto;
  margin-right: auto;
  margin-top: -5.5rem;
`;

export const PostHeader = styled.div`
  background-color: ${props => props.theme["gray-800"]};

  border: none;
  border-radius: 10px;

  filter: drop-shadow(0px 2px 28px #00000033);

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  padding: 2rem 2.5rem;
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  width: 100%;
`;

export const PostLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1.6;
  color: ${props => props.theme['blue-500']};
`;

export const PostTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.3;
  color: ${props => props.theme['gray-100']};
`

export const PostFooter = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PostBody = styled.main`
  padding: 2.5rem 2rem;
`

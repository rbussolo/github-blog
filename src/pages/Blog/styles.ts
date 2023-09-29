import { styled } from "styled-components";

export const BlogContainer = styled.div`
  max-width: 56rem;
  padding-left: 1rem;
  padding-right: 1rem;
  
  margin-left: auto;
  margin-right: auto;
  margin-top: -5.5rem;
`;

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

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 4.5rem;
`

export const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchTitle = styled.span`
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.6;
`;

export const SearchResult = styled.span`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${props => props.theme["blue-300"]}
`;

export const SearchInput = styled.input`
  border-radius: 6px;
  border: 1px solid ${props => props.theme["gray-600"]};
  background-color: ${props => props.theme["gray-950"]};
  color: ${props => props.theme["gray-300"]};
  padding: 0.75rem 1rem;

  &::placeholder {
    color: ${props => props.theme["gray-500"]};
  }
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 16.25rem;
  gap: 2rem;

  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.theme["gray-700"]};
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.6;
`;

export const PostTime = styled.span`
  font-size: 0.875rem;
  line-height: 1.6;
  white-space: nowrap;
  color: ${props => props.theme["blue-300"]}
`;

export const PostBody = styled.div`
  max-height: 7rem;
  min-height: 7rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

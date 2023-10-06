import { styled } from "styled-components";

export const BlogContainer = styled.div`
  max-width: 56rem;
  padding-left: 1rem;
  padding-right: 1rem;
  
  margin-left: auto;
  margin-right: auto;
  margin-top: -5.5rem;
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: 16.25rem;
  gap: 2rem;

  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const PostContent = styled.a`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.theme["gray-700"]};
  color: ${props => props.theme['gray-300']};
  text-decoration: none;


  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme["gray-800"]};
  }
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 4rem;
  min-height: 4rem;
  overflow: hidden;
`;

export const PostTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.6;
  color: ${props => props.theme['gray-200']};
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

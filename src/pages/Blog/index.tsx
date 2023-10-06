import { BlogContainer, PostBody, PostContainer, PostContent, PostHeader, PostTime, PostTitle, SearchContainer, SearchHeader, SearchInput, SearchResult, SearchTitle } from "./styles";
import { Profile } from '../../components/Profile';
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";

type GithubSearchResponse = {
  total_count: number;
  items?: [{
    id: number;
    url: string;
    number: number;
    title: string;
    created_at: string;
    body: string;
  }]
}

export function Blog() {
  const [search, setSearch] = useState("");
  const [githubSearch, setGithubSearch] = useState<GithubSearchResponse>({
    total_count: 0,
  });

  const {total_count, items} = githubSearch;

  useEffect(() => {
    fetch(`https://api.github.com/search/issues?q=${search}%20repo:rocketseat-education/reactjs-github-blog-challenge`)
    .then(response => response.json())
    .then(data => setGithubSearch(data));
  }, [search]);

  return (
    <BlogContainer>
      <Profile />

      <SearchContainer>
        <SearchHeader>
          <SearchTitle>Publicações</SearchTitle>
          <SearchResult>{total_count} publicações</SearchResult>
        </SearchHeader>
        <SearchInput 
          placeholder="Buscar conteúdo" 
          type="text"
          onBlur={(event) => setSearch(event.target.value)}
        />
      </SearchContainer>

      <PostContainer>
        { items && items.map(item => {
          return (
            <PostContent key={item.id} href={`/post/${item.number}`}>
              <PostHeader>
                <PostTitle>{item.title}</PostTitle>
                <PostTime>{formatDistanceToNow(new Date(item.created_at))}</PostTime>
              </PostHeader>

              <PostBody>{item.body}</PostBody>
            </PostContent>
          )
        })}
      </PostContainer>
    </BlogContainer>
  )
}
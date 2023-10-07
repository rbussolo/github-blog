import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostActions, PostBody, PostContainer, PostFooter, PostHeader, PostInfo, PostLink, PostTitle } from "./styles";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useParams } from "react-router-dom";

type GithubIssues = {
  id: number;
  title: string;
  body: string;
  created_at: string;
  html_url?: string;
  comments: number;
  user?: {
    id: number;
    login: string;
    html_url: string;
  }
}

export function Post() {
  const [issues, setIssues] = useState<GithubIssues>({
    id: 0,
    title: "",
    body: "",
    created_at: new Date().toISOString(),
    comments: 0
  });

  const { id } = useParams();

  const { title, html_url, user, created_at, comments } = issues;
  const body = issues.body.replace(/\r\n/g, '<br />');

  useEffect(() => {
    fetch(`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`)
    .then(response => response.json())
    .then(data => setIssues(data));
  }, []);

  function createMarkup(text: string) { 
    return { __html: text }; 
  }

  return (
    <PostContainer>
      <PostHeader>
        <PostActions>
          <PostLink href="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </PostLink>

          <PostLink href={html_url} target="_blank">
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </PostLink>
        </PostActions>

        <PostTitle>
          { title }
        </PostTitle>

        <PostFooter>
          <PostInfo>
            <FontAwesomeIcon icon={faGithub} />
            <span>{ user?.login }</span>
          </PostInfo>

          <PostInfo>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{ formatDistanceToNow(new Date(created_at), { locale: ptBR }) }</span>
          </PostInfo>

          <PostInfo>
            <FontAwesomeIcon icon={faComment} />
            <span>{ comments } comentário(s)</span>
          </PostInfo>
        </PostFooter>
      </PostHeader>
      <PostBody dangerouslySetInnerHTML={createMarkup(body)}>
      </PostBody>
    </PostContainer>
  )
}
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { BlogContainer, PostBody, PostContainer, PostContent, PostHeader, PostTime, PostTitle, ProfileContainer, ProfileContent, ProfileContentBody, ProfileContentFooter, ProfileContentHeader, ProfileImage, ProfileInfo, ProfileLink, ProfileTitle, SearchContainer, SearchHeader, SearchInput, SearchResult, SearchTitle } from "./styles";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function Blog() {
  return (
    <BlogContainer>
      <ProfileContainer>
        <ProfileImage src="https://avatars.githubusercontent.com/u/21092783?v=4"/>

        <ProfileContent>
          <ProfileContentHeader>
            <ProfileTitle>
              Rodrigo Bussolo
            </ProfileTitle>

            <ProfileLink href="https://github.com/rbussolo">
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </ProfileLink>
          </ProfileContentHeader>

          <ProfileContentBody>
            Hello, my name is Rodrigo, I'm a Software Developer and I had been working for over 10 years in this field. I'm studying ReactJS and NodeJS to start a new job.
          </ProfileContentBody>

          <ProfileContentFooter>
            <ProfileInfo>
              <FontAwesomeIcon icon={faGithub} />
              <span>rbussolo</span>
            </ProfileInfo>

            <ProfileInfo>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Coplan</span>
            </ProfileInfo>

            <ProfileInfo>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 seguidores</span>
            </ProfileInfo>
          </ProfileContentFooter>
        </ProfileContent>
      </ProfileContainer>

      <SearchContainer>
        <SearchHeader>
          <SearchTitle>Publicações</SearchTitle>
          <SearchResult>6 publicações</SearchResult>
        </SearchHeader>
        <SearchInput placeholder="Buscar conteúdo" />
      </SearchContainer>

      <PostContainer>
        <PostContent>
          <PostHeader>
            <PostTitle>JavaScript data types and data structures</PostTitle>
            <PostTime>Ha 1 dia</PostTime>
          </PostHeader>

          <PostBody>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
</PostBody>
        </PostContent>

        <PostContent>
          <PostHeader>
            <PostTitle>JavaScript data types and data structures</PostTitle>
            <PostTime>Ha 1 dia</PostTime>
          </PostHeader>

          <PostBody>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
</PostBody>
        </PostContent>

        <PostContent>
          <PostHeader>
            <PostTitle>JavaScript data types and data structures</PostTitle>
            <PostTime>Ha 1 dia</PostTime>
          </PostHeader>

          <PostBody>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
</PostBody>
        </PostContent>

        <PostContent>
          <PostHeader>
            <PostTitle>JavaScript data types and data structures</PostTitle>
            <PostTime>Ha 1 dia</PostTime>
          </PostHeader>

          <PostBody>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
</PostBody>
        </PostContent>

        <PostContent>
          <PostHeader>
            <PostTitle>JavaScript data types and data structures</PostTitle>
            <PostTime>Ha 1 dia</PostTime>
          </PostHeader>

          <PostBody>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
</PostBody>
        </PostContent>

        <PostContent>
          <PostHeader>
            <PostTitle>JavaScript data types and data structures</PostTitle>
            <PostTime>Ha 1 dia</PostTime>
          </PostHeader>

          <PostBody>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
</PostBody>
        </PostContent>
      </PostContainer>
    </BlogContainer>
  )
}
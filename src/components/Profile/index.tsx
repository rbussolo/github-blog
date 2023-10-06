import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileContainer, ProfileContent, ProfileContentBody, ProfileContentFooter, ProfileContentHeader, ProfileImage, ProfileInfo, ProfileLink, ProfileTitle } from "./styles";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

type GithubResponse = {
  avatar_url: string;
  name: string;
  bio: string;
  company: string;
  followers: number;
}

export function Profile() {
  const username = "rbussolo";
  const [githubData, setGithubData] = useState<GithubResponse>({
    avatar_url: "",
    name: "",
    bio: "",
    company:"",
    followers: 0
  });
  const { avatar_url, name, bio, company, followers } = githubData;

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        setGithubData(data);
    });
  }, []);

  return (
    <ProfileContainer>
      <ProfileImage src={avatar_url}/>

      <ProfileContent>
        <ProfileContentHeader>
          <ProfileTitle>
            {name}
          </ProfileTitle>

          <ProfileLink href={`https://github.com/${username}`}>
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </ProfileLink>
        </ProfileContentHeader>

        <ProfileContentBody>
          {bio}
        </ProfileContentBody>

        <ProfileContentFooter>
          <ProfileInfo>
            <FontAwesomeIcon icon={faGithub} />
            <span>{username}</span>
          </ProfileInfo>

          <ProfileInfo>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{company}</span>
          </ProfileInfo>

          <ProfileInfo>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{followers} seguidores</span>
          </ProfileInfo>
        </ProfileContentFooter>
      </ProfileContent>
    </ProfileContainer>
  );
}
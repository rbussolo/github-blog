import { BackgroundImage, HeaderContainer, Logo } from "./style";

import effectLeft from '../../assets/effect-left.svg';
import effectRight from '../../assets/effect-right.svg';
import logo from '../../assets/logo-github-blog.svg';


export function Header() {
  return (
    <HeaderContainer>
      <BackgroundImage src={effectLeft} />
      <Logo src={logo} />
      <BackgroundImage src={effectRight} />
    </HeaderContainer>
  )
}
import * as S from '../styles/footer-styles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsMailbox } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa6';
import { HiEnvelope } from 'react-icons/hi2';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.FooterContainer>
      <S.FooterTop>
        <S.Logo>{"</>"} <span>FrancisKuro</span>
        </S.Logo>

        <S.SocialIcons>
          <a href="https://github.com/franciskuro7/"><FaGithub size={18} /></a>
          <a href="https://www.linkedin.com/in/fineface-francis-kuroghoekigha-762158279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin size={18} /></a>
          <a FaFacebookF size={18} /></a>
          <a href="mailto:franciskuro7@gmail.com"><HiEnvelope size={18} /></a>
        </S.SocialIcons>
      </S.FooterTop>

      <S.Copyright>
        <p> © {currentYear} FrancisKuro. All rights reserved.</p>
      </S.Copyright>
    </S.FooterContainer>
  );
};

export default Footer;
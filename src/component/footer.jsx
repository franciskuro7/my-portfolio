import * as S from '../styles/footer-styles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsMailbox } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
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
          <a href="#"><FaLinkedin size={18} /></a>
          <a href="#"><AiOutlineTwitter size={18} /></a>
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
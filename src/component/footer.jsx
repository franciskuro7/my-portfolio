import React from 'react';
import * as S from '../styles/footer-styles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { BsMailbox } from 'react-icons/bs';
import { MdQrCode2 } from 'react-icons/md';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.FooterContainer>
      <S.FooterTop>
        <S.Logo>{"</>"} <span>FrancisKuro</span>
        </S.Logo>

        <S.NavLinks>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </S.NavLinks>

        <S.SocialIcons>
          <a href="#"><FaGithub size={18} /></a>
          <a href="#"><FaLinkedin size={18} /></a>
          <a href="#"><HiX size={18} /></a>
          <a href="#"><BsMailbox size={18} /></a>
        </S.SocialIcons>
      </S.FooterTop>

      <S.Copyright>
        <p>© {currentYear} Alex. All rights reserved.</p>
        <p>Built with React & Styled Components</p>
      </S.Copyright>
    </S.FooterContainer>
  );
};

export default Footer;
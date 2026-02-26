import React from 'react';
import * as S from '../styles/services-styles';
import { HiCode, HiSearch } from 'react-icons/hi';
import { FiLayout, FiSmartphone } from 'react-icons/fi';
import { PiPalette } from 'react-icons/pi';
import { MdHorizontalSplit } from 'react-icons/md';

const services = [
  {
    title: "Frontend Development",
    desc: "Building responsive and performant web applications using React, Next.js, and modern JavaScript frameworks with pixel-perfect designs.",
    icon: <FiLayout size={24} />,
    wide: true
  },
  {
    title: "Responsive Design",
    desc: "Creating mobile-first, responsive interfaces that work seamlessly across all devices and screen sizes with exceptional user experience.",
    icon: <FiSmartphone size={24} />,
    wide: true
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive and visually appealing user interfaces with a focus on usability, accessibility, and modern aesthetics.",
    icon: <PiPalette size={24} />,
    wide: false
  },
  {
    title: "Custom Components",
    desc: "Developing reusable, scalable component libraries and design systems that maintain consistency.",
    icon: <HiCode size={24} />,
    wide: false
  },
  {
    title: "Performance Optimization",
    desc: "Optimizing web applications for speed and efficiency through code splitting, lazy loading, and best practices.",
    icon: <MdHorizontalSplit size={24} />,
    wide: false
  },
  {
    title: "Code Review & Consulting",
    desc: "Providing expert code reviews, architecture consulting, and technical guidance to improve your project.",
    icon: <HiSearch size={24} />,
    wide: false
  }
];

const Services = () => {
  return (
    <S.ServicesContainer>
      <S.Grid>
        {services.map((service, index) => (
          <S.ServiceCard key={index} wide={service.wide}>
            <S.IconWrapper>{service.icon}</S.IconWrapper>
            <S.Title>{service.title}</S.Title>
            <S.Description>{service.desc}</S.Description>
          </S.ServiceCard>
        ))}
      </S.Grid>
    </S.ServicesContainer>
  );
};

export default Services;
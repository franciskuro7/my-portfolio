import React from 'react';
import profile from "../assets/img/profile.jpeg"
import {
    HeroContainer, ContentWrapper, TextSection, Tagline, Title, Description,
    GetInTouchBtn, StatsContainer, StatItem, ImageSection, TechOverlay
} from '../styles/hero.styles';





const Hero = () => {
    return (
        <HeroContainer>
            <ContentWrapper>
                <TextSection>
                    <Tagline>★ Full Stack Developer | Based in Nigeria</Tagline>
                    <Title>Helping business and Company Build Websites.</Title>
                    <Description>
                        Hey! I'm Fineface Kuroghoekigha Francis, a Full Stack Website Developer from
                        Nigeria who loves building websites that make businesses
                        stand out. I work with React.js, Next.js, Node.js,
                        and Express.js to create fast, user-friendly sites that
                        actually solve problems. I'm always
                        excited to take on new challenges. Got a project in mind?
                        Let's make it happen!
                    </Description>
                    <GetInTouchBtn>Get in Touch</GetInTouchBtn>

                    <StatsContainer>
                        <StatItem>
                            <h3>3+</h3>
                            <p>Years <br /> Experience</p>
                        </StatItem>
                        <StatItem>
                            <h3>50+</h3>
                            <p>Projects <br /> Completed</p>
                        </StatItem>
                        <StatItem>
                            <h3>15+</h3>
                            <p>Technologies</p>
                        </StatItem>
                        <StatItem>
                            <h3>98%</h3>
                        </StatItem>
                    </StatsContainer>
                </TextSection>

                <ImageSection>
                    <img src={profile} alt="Developer" />
                    <TechOverlay>
                        <span>⚛️</span>
                        <span>🟢</span>
                        <span>📦</span>
                        <span>🍃</span>
                    </TechOverlay>
                </ImageSection>
            </ContentWrapper>
        </HeroContainer>
    );
};

export default Hero;
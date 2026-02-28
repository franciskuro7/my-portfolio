import React from 'react';
import profile from "../assets/img/profile.jpeg"
import * as S from '../styles/hero.styles';

const Hero = () => {
    return (
        <S.HeroContainer>
            <S.ContentWrapper>
                <S.TextSection>
                    <S.Tagline>★ Full Stack Developer | Based in Nigeria</S.Tagline>
                    <S.Title>Helping business and Company Build Websites.</S.Title>
                    <S.Description>
                        Hi!, I'm a Full Stack  Developer from Nigeria who loves
                        building modern scalable application with React.js, Next.js,
                        Node.js, and Express.js transforming ideas into exceptional
                        digital experience. I'm always excited to take on new challenges.
                        Got a project in mind? Let's make it happen!
                    </S.Description>
                    <S.GetInTouchBtn>Get in Touch</S.GetInTouchBtn>

                    <S.StatsContainer>
                        <S.StatItem>
                            <h3>3+</h3>
                            <p>Years <br /> Experience</p>
                        </S.StatItem>
                        <S.StatItem>
                            <h3>50+</h3>
                            <p>Projects <br /> Completed</p>
                        </S.StatItem>
                        <S.StatItem>
                            <h3>15+</h3>
                            <p>Technologies</p>
                        </S.StatItem>
                        <S.StatItem>
                            <h3>98%</h3>
                        </S.StatItem>
                    </S.StatsContainer>
                </S.TextSection>

                <S.ImageSection>
                    <S.ImagetTarget>
                        <img src={profile} alt="Developer" />
                    </S.ImagetTarget>

                    <S.Tagline style={{ textAlign: "center", margin: "5px auto" }}>Fineface Kuroghoekigha Francis</S.Tagline>
                    <S.TechOverlay>
                        <span>⚛️</span>
                        <span>🟢</span>
                        <span>📦</span>
                        <span>🍃</span>
                    </S.TechOverlay>
                </S.ImageSection>
            </S.ContentWrapper>
        </S.HeroContainer>
    );
};

export default Hero;
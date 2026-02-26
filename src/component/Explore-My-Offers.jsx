import React from 'react';
import * as S from '../styles/Explore-My-Offer-styles';
import { HiCheckCircle, HiCode } from 'react-icons/hi';
import { HiCpuChip } from 'react-icons/hi2';
import { MdHorizontalSplit } from 'react-icons/md';


const ExploreMyOffer = () => {
    return (
        <S.HeroSection>

            <S.ContentSide>
                <S.Badge>
                    <HiCode size={16} /> Full-Stack Developer <HiCheckCircle size={14} />
                </S.Badge>

                <S.MainTitle>
                    Crafting Digital <br /> Experiences That Matter
                </S.MainTitle>

                <S.Bio>
                    I'm a passionate React developer with over 3 years of experience building
                    scalable, performant web applications. I specialize in creating intuitive user
                    interfaces that combine beautiful design with exceptional functionality.
                    <br /><br />
                    My expertise spans the entire frontend ecosystem, from React and Next.js to
                    TypeScript and modern CSS frameworks.
                </S.Bio>

                <S.StatsContainer>
                    <S.StatItem>
                        <h4>45+</h4>
                        <span>Happy Clients</span>
                    </S.StatItem>
                    <S.StatItem>
                        <h4>2.5K+</h4>
                        <span>Code Commits</span>
                    </S.StatItem>
                    <S.StatItem>
                        <h4>500+</h4>
                        <span>Github Stars</span>
                    </S.StatItem>
                </S.StatsContainer>
            </S.ContentSide>

            {/* Right Side */}
            <S.FeatureSide>
                <S.FeatureCard full>
                    <HiCode color="#39FF14" style={{ marginBottom: '15px' }} />
                    <h3>Expertise</h3>
                    <p style={{ color: '#888', fontSize: '0.9rem' }}>
                        Specialized in building scalable web applications with modern technologies and best practices.
                    </p>
                </S.FeatureCard>

                <S.FeatureCard>
                    <HiCpuChip color="#39FF14" size={20} />
                    <h4 style={{ margin: '10px 0' }}>Clean Code</h4>
                    <p style={{ color: '#666', fontSize: '0.8rem' }}>Writing maintainable, well-documented code that scales.</p>
                </S.FeatureCard>

                <S.FeatureCard>
                    <MdHorizontalSplit color="#39FF14" size={20} />
                    <h4 style={{ margin: '10px 0' }}>Performance</h4>
                    <p style={{ color: '#666', fontSize: '0.8rem' }}>Optimizing for speed and efficiency in every project.</p>
                </S.FeatureCard>

                {/* Bottom Metrics */}
                <S.MetricCard>
                    <span className="value">100%</span>
                    <span className="label">Client Satisfaction</span>
                </S.MetricCard>
                <S.MetricCard>
                    <span className="value">24/7</span>
                    <span className="label">Support Available</span>
                </S.MetricCard>
            </S.FeatureSide>
        </S.HeroSection>
    );
};

export default ExploreMyOffer;
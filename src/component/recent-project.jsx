import React, { useState } from 'react';
import {
    ProjectsSection, Header, FilterContainer, FilterBtn, ProjectsGrid,
    ProjectCard, ImageWrapper, Badge, CardContent, ProjectDesc,
    TechStack, TechTag, Metrics, ProjectTitle
} from '../styles/recent-project-styles';




const RecentsProjects = () => {
    const [filter, setFilter] = useState('Web Apps');

    const projects = [
        {
            title: "Task Management Dashboard",
            category: "Web Apps",
            desc: "Collaborative project management tool with drag-and-drop kanban boards, real-time updates, and tea...",
            tech: ["React", "Firebase", "Styled-components"],
            metric: "↗ 500+ active users"
        },
        {
            title: "Social Media Analytics",
            category: "Web Apps",
            desc: "Real-time social media analytics dashboard with data visualization, sentiment analysis, and automated...",
            tech: ["Next.js", "Chart.js", "MongoDB", "Redis"],
            metric: "↗ 10K+ data points/day"
        },
        {
            title: "Weather Forecast App",
            category: "Web Apps",
            desc: "Beautiful weather application with hourly forecasts, interactive maps, and location-based alerts.",
            tech: ["React", "OpenWeather API", "Mapbox", "Styled-components"],
            metric: "↗ Live weather data"
        },
        
    ];

    const categories = ['All', 'Web Apps', 'UI Components', 'Full Stack'];

    return (
        <ProjectsSection id="projects">
            <Header>
                <h2>Featured Projects</h2>
                <p>Showcasing my best work and achievements</p>
            </Header>

            <FilterContainer>
                {categories.map(cat => (
                    <FilterBtn
                        key={cat}
                        active={filter === cat}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </FilterBtn>
                ))}
            </FilterContainer>

            <ProjectsGrid>
                {projects.map((item, index) => (
                    <ProjectCard key={index}>
                        <ImageWrapper>
                            <Badge>{item.category}</Badge>
                            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #2c1a4d 0%, #1a1a1a 100%)', borderRadius: '8px', border: '1px solid #444' }}></div>
                        </ImageWrapper>

                        <CardContent>
                            <ProjectTitle>{item?.title}</ProjectTitle>
                            <ProjectDesc>{item?.desc}</ProjectDesc>

                            <TechStack>
                                {item.tech.map(t => <TechTag key={t}>{t}</TechTag>)}
                            </TechStack>

                            <Metrics>{item.metric}</Metrics>
                        </CardContent>
                    </ProjectCard>
                ))}
            </ProjectsGrid>
        </ProjectsSection>
    );
};

export default RecentsProjects;
import React from 'react';
import * as S from '../styles/skils-tech-styles';
const skillsData = [
  {
    category: "Frontend Development",
    items: [
      { name: "JavaScript", level: "Expert", percent: 90, exp: "3+ years" },
      { name: "React.js", level: "Expert", percent: 95, exp: "2+ years" },
      { name: "Next.js", level: "Advanced", percent: 80, exp: "2+ years" },
      { name: "Styled-components", level: "Expert", percent: 95, exp: "3+ years" }
      // { name: "TypeScript", level: "Advanced", percent: 85, exp: "2+ years" },
    ]
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", level: "Intermediate", percent: 70, exp: "2+ years", color: "#ffa500" },
      { name: "Express.js", level: "Intermediate", percent: 75, exp: "2+ years" },
      { name: "REST APIs", level: "Advanced", percent: 85, exp: "3+ years" }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: "Advanced", percent: 88, exp: "4+ years" },
      { name: "Responsive Design", level: "Expert", percent: 98, exp: "4+ years" },
      { name: "Vite", level: "Advanced", percent: 80, exp: "2+ years" }
      // { name: "Figma", level: "Intermediate", percent: 65, exp: "2+ years", color: "#ffa500" },
    ]
  }
];

const Skills = () => {
  return (
    <S.SkillsSection>
      <S.HeaderArea>
        <S.Badge >⭐ My Expertise</S.Badge>
        <h2 style={{ fontSize: '2.5rem', margin:"1rem auto 0rem"}}>Skills & Technologies</h2>
        <p style={{ color: '#666' }}>A comprehensive overview of my technical skills and proficiency levels</p>
      </S.HeaderArea>

      <S.SkillsGrid>
        {skillsData.map((group, i) => (
          <S.SkillCard key={i}>
            <S.CategoryTitle>{group.category}</S.CategoryTitle>
            {group.items.map((skill, j) => (
              <S.SkillItem key={j}>
                <S.SkillInfo>
                  <div className="name-box">
                    <span style={{ fontWeight: '500' }}>{skill.name}</span>
                    <span style={{ fontSize: '0.625rem', color: '#555' }}>{skill.exp}</span>
                  </div>
                  <S.LevelBadge color={skill.color}>{skill.level}</S.LevelBadge>
                </S.SkillInfo>
                <S.ProgressBar percent={skill.percent} />
              </S.SkillItem>
            ))}
          </S.SkillCard>
        ))}
      </S.SkillsGrid>
    </S.SkillsSection>
  );
};

export default Skills;
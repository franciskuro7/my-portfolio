import styled from 'styled-components';

export const SkillsSection = styled.section`
  background-color: #000;
  color: #fff;
  padding: 5.5rem 10%;
  text-align: center;
  margin-top:5rem;
   @media (max-width: 769px){
    padding: 5rem 1rem;
}
`;

export const HeaderArea = styled.div`
  margin-bottom: 2rem;
`;
export const Badge = styled.span`
    background: rgba(74, 222, 128, 0.1);
    color: #4ade80;
    padding: 0.5rem 1rem;
    margin:3rem;
    border-radius: 20px;
    width: fit-content;
    font-size: 0.8rem;
    border: 1px solid rgba(74, 222, 128, 0.2);
`
export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  text-align: left;
`;

export const SkillCard = styled.div`
  background: #111;
  border-radius: 24px;
  padding: 2rem 1.5rem;
  border: 1px solid #222;
`;

export const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 30px;
  padding-left: 15px;
  border-left: 2px solid #39FF14;
`;

export const SkillItem = styled.div`
  margin-bottom: 25px;
`;

export const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  .name-box {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const LevelBadge = styled.span`
  font-size: 0.75rem;
  padding: 1px 10px;
  border-radius: 100px;
  border: 1px solid ${props => props.color || '#39FF14'};
  color: ${props => props.color || '#39FF14'};
  background: rgba(57, 255, 20, 0.05);
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: #222;
  border-radius: 10px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: ${props => props.percent}%;
    height: 100%;
    background: linear-gradient(90deg, #1a4a1a, #39FF14);
  }
`;
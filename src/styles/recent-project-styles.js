import styled from "styled-components";

export const ProjectsSection = styled.section`
  background-color: #0a0a0a;
  color: #fff;
  padding: 2.5rem 10%;
  font-family: 'Inter', sans-serif;
  @media (max-width: 890px){
    padding: 2.5rem 1rem;
}
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.185rem;
  }
  p {
    color: #888;
    font-size: 1rem;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;


  @media (max-width: 890px){
    flex-wrap:wrap;
}
`;

export const FilterBtn = styled.button`
  background: ${props => props.active ? 'rgba(74, 222, 128, 0.1)' : '#1a1a1a'};
  color: ${props => props.active ? '#4ade80' : '#888'};
  border: 1px solid ${props => props.active ? '#4ade80' : 'transparent'};
  padding: 0.325rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? '0 0 15px rgba(74, 222, 128, 0.2)' : 'none'};

  &:hover {
    border-color: #4ade80;
    color: #4ade80;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
`;

export const ProjectCard = styled.div`
  background: #141414;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #222;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: #333;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 220px;
  background: #1f1f1f;
  padding:1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 5px;
  left:5px;
  background: rgba(0,0,0,0.6);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.7rem;
  color: #ccc;
`;

export const CardContent = styled.div`
  padding: 1rem;
  
`;

export const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  line-height:1.5;
`;

export const ProjectDesc = styled.p`
  color: #888;
  font-size: 0.9rem;
  line-height: 1.3;
  margin-bottom: 20px;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

export const TechTag = styled.span`
  background: #1a1a1a;
  color: #4ade80;
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 15px;
  border: 1px solid #222;
`;

export const Metrics = styled.div`
  color: #4ade80;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 5px;
`;

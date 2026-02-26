import styled from 'styled-components';

export const HeroSection = styled.section`
  background-color: #000;
  color: #fff;
  padding: 100px 10%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;
  

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

// --- Left Column ---
export const ContentSide = styled.div`
  flex: 1;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(57, 255, 20, 0.1);
  color: #39FF14;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid rgba(57, 255, 20, 0.3);
  font-size: 0.85rem;
  margin-bottom: 24px;
`;

export const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  margin-bottom: 30px;
  font-weight: 700;
`;

export const Bio = styled.p`
  color: #a0a0a0;
  line-height: 1.8;
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 40px;
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const StatItem = styled.div`
  border-left: 2px solid #39FF14;
  padding-left: 15px;
  
  h4 {
    font-size: 1.8rem;
    margin: 0;
  }
  span {
    color: #666;
    font-size: 0.8rem;
    text-transform: uppercase;
  }
`;

// --- Right Column ---
export const FeatureSide = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const FeatureCard = styled.div`
  background: #111;
  border-radius: 20px;
  padding: 30px;
  grid-column: ${props => props.full ? 'span 2' : 'span 1'};
`;

export const MetricCard = styled.div`
  text-align: center;
  padding: 20px;
  
  .value {
    color: #39FF14;
    font-size: 1.5rem;
    font-weight: bold;
    display: block;
  }
  .label {
    color: #666;
    font-size: 0.75rem;
  }
`;
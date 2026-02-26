import styled from 'styled-components';

export const ServicesContainer = styled.section`
  background-color: #000;
  color: #fff;
  padding: 80px 10%;
  font-family: 'Inter', sans-serif;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ServiceCard = styled.div`
  background: #111;
  border: 1px solid #222;
  border-radius: 24px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #39FF14; /* Neon green */
  }

  /* Spanning logic to match the image layout */
  grid-column: ${props => props.wide ? 'span 2' : 'span 1'};
`;

export const IconWrapper = styled.div`
  background: #1a1a1a;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #39FF14;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
`;

export const Description = styled.p`
  color: #888;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
`;
import styled from "styled-components";

export const HeroContainer = styled.section`
  background-color: #0a0a0a;
  color: #ffffff;
//   height: 100vh;
  padding: 0 10%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  top: 8rem;

  &::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(46, 125, 50, 0.15) 0%, rgba(0,0,0,0) 70%);
    top: -100px;
    left: -100px;
    z-index: 0;
  }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    padding:1rem;
    gap: 4rem;
    z-index: 1;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Tagline = styled.div`
  background: rgba(74, 222, 128, 0.1);
  color: #4ade80;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  width: fit-content;
  font-size: 0.8rem;
  border: 1px solid rgba(74, 222, 128, 0.2);
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  max-width: 500px;
  line-height: 1.1;
  margin: 0;
  font-weight: 600;
`;

export const Description = styled.p`
  color: #b3afaf;
  line-height: 1.3;
  max-width: 500px;
`;

export const GetInTouchBtn = styled.button`
  background: #fff;
  color: #000;
  padding: 0.6rem 2rem;
  border-radius: 50px;
  border: none;
  font-weight: bold;
  width: fit-content;
  cursor: pointer;
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
`;

export const StatItem = styled.div`
  h3 {
    font-size: 1.8rem;
    margin: 0;
    color: #4ade80;
  }
  p {
    font-size: 0.8rem;
    color: #777;
    margin: 5px 0 0 0;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  background: #1a1a1a;
  border-radius: 24px;
  overflow: hidden;
  height: 500px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
  }
`;

export const TechOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  display: flex;
  gap: 1rem;
  border: 1px solid rgba(255,255,255,0.1);
`;
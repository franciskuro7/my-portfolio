import styled from "styled-components";

export const HeroContainer = styled.section`
  width:100%;
  background-color: #0a0a0a;
  color: #ffffff;
  padding: 1rem 10%;
  display: flex;
  align-items: center;
  gap:1rem;
  position: relative;
  overflow: hidden;
  top: 7rem;

  &::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(46, 125, 50, 0.23) 0%, rgba(0, 0, 0, 0.19) 70%);
    top: -100px;
    left: -100px;
    z-index: 0;
  }
     @media (max-width: 890px){
    padding: 1rem;
}
    
`;

export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    padding:1rem;
    gap: 2rem;
    z-index: 1;

    @media (max-width: 760px){
      flex-direction:column;
      padding:0rem;
    }
`;

export const TextSection = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 760px){
    width:100%;
}
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
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  max-width: 500px;
  line-height: 1.3;
  margin: 0;
  font-weight: 600;

   @media (max-width: 760px){
    max-width:100%;
}
`;

export const Description = styled.p`
  color: #b3afaf;
  line-height: 1.3;
  max-width: 500px;

   @media (max-width: 760px){
    max-width:100%;
}
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
  gap: 1rem;
  margin-top: 1rem;
`;

export const StatItem = styled.div`
  h3 {
    font-size: clamp(0.7rem, 5vw,  1.8rem);
    margin: 0;
    color: #4ade80;
  }
  p {
    font-size: clamp(0.625rem, 5vw,  0.8rem);
    color: #777;
    margin: 5px 0 0 0;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  flex:1;
  background: #1a1a1a;
  border-radius: 24px;
  overflow: hidden;
  height: 500px;
 @media (max-width: 760px){
      display:none;
}
`;

export const ImagetTarget = styled.div`
  width:100%;
  height:calc(100% - 100px);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(10%);
  }
`;

export const TechOverlay = styled.div`
  margin:10px auto;
  width:180px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  display: flex;
  gap: 1rem;
  border: 1px solid rgba(255,255,255,0.1);
`;
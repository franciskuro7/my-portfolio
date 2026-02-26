import styled from "styled-components";

export const ContactSection = styled.section`
  background-color: #0a0a0a;
  color: #fff;
  padding: 100px 10%;
  font-family: 'Inter', sans-serif;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  h2 { font-size: 3rem; margin-bottom: 10px; }
  p { color: #888; font-size: 1.1rem; }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  @media (max-width: 968px) { grid-template-columns: 1fr; }
`;

export const FormCard = styled.form`
  background: #141414;
  padding: 40px;
  border-radius: 24px;
  border: 1px solid #222;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  label { font-size: 0.9rem; color: #ccc; }
  input, textarea {
    background: #1a1a1a;
    border: 1px solid #333;
    padding: 15px;
    border-radius: 12px;
    color: #fff;
    outline: none;
    transition: border-color 0.3s;
    &:focus { border-color: #4ade80; }
  }
  textarea { height: 120px; resize: none; }
`;

export const SendButton = styled.button`
  background: linear-gradient(90deg, #4ade80 0%, #2e7d32 100%);
  color: #000;
  padding: 15px;
  border-radius: 12px;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  &:hover { opacity: 0.9; }
`;



export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  h3 { font-size: 1.8rem; margin-bottom: 10px; }
  p { color: #888; line-height: 1.6; }
`;

export const ContactTile = styled.div`
  background: #141414;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #222;
`;

export const IconBox = styled.div`
  width: 45px;
  height: 45px;
  background: rgba(74, 222, 128, 0.1);
  color: #4ade80;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

export const TileText = styled.div`
  span { display: block; font-size: 0.8rem; color: #666; }
  strong { font-size: 1rem; color: #eee; }
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

export const SocialIcon = styled.a`
  width: 45px;
  height: 45px;
  background: #141414;
  border: 1px solid #222;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  text-decoration: none;
  transition: all 0.3s;
  &:hover { border-color: #4ade80; color: #4ade80; }
`;

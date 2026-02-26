import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #000;
  border-top: 1px solid #111;
  padding: 60px 10% 30px;
  color: #fff;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4ade80;
  span { color: #fff; }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 30px;

  a {
    color: #888;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;

    &:hover {
      color: #39FF14;
    }
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    background: #111;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease, background 0.3s ease;

    &:hover {
      background: #39FF14;
      color: #000;
      transform: translateY(-5px);
    }
  }
`;

export const Copyright = styled.div`
  border-top: 1px solid #111;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #555;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;
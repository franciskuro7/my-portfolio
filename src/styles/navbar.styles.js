import styled from "styled-components";



export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  
  a{
    text-decoration:none;
 }

  @media (max-width: 769px){
    padding: 1rem;
}
`;

export const NavBarWrapper = styled.nav`
    width: 100%;
    height: 5em;
    background: rgb(22, 22, 22);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 5em;
    color: #fff;
    @media (max-width: 769px){
        padding:  0.625rem 10px;
`
export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4ade80; /* React Green */
  span { color: #fff; }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  a {
    color: #ccc;
    text-decoration: none;
    font-size: 0.9rem;
    &:hover { color: #fff; }
  }

  @media (max-width: 769px){
    display:none;
}
`;

export const HireBtn = styled.button`
    color: #4ade80;
    background:transparent;
    cursor: pointer;
    border: .9px solid #4ade80;
    padding: 10px;
    border-radius: 4px;
  @media (max-width: 769px){
    display:none;
}
`;
export const Menu = styled.div`
    font-size: 30px;
    padding: 3px;
    border-radius: 3px;
    cursor: pointer;
    display: none;
    transition: 0.3s ease-in-out;
    &:hover {
        background: rgba(107, 107, 107, 0.466);
    }

    @media screen and (max-width: 769px) {
        display:block;
    }

`;

export const NavMobile = styled.div`
    position: fixed;
    width: 100%;
    inset: 0;
    background: rgb(22, 22, 22);
    display: flex;
    flex-direction:column;
    transition: transform 0.3s ease;
    z-index: 100;
`;


export const Cancel = styled.div`
        font-size: 30px;
        font-weight: 400;
        padding: 6px;
        color: white;
        opacity: 0.7;
        cursor: pointer;
        transition: transform 0.3s ease;
        transition: 0.3s ease-in-out;

  &:hover {
    background: rgba(88, 88, 88, 0.466); /* .nav-mobile .cancel:hover */
    border-radius: 3px;
  }
`;
export const MobileNavList = styled.ul`
    width: 100%;
    padding: 0px 1rem;
    display: flex;
    flex-direction:column;
    gap: 2rem;
    a {
      color: #ccc;
      text-decoration: none;
      font-size: 1rem;
      &:hover { color: #fff; }
    }

`;

export const MobileNav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1.3rem;
    justify-content: space-between;
`;


export const MobileBtn = styled.button`
    position: absolute;
    color: #4ade80;
    background:transparent;
    cursor: pointer;
    border: .9px solid #4ade80;
    padding: 10px 15px;
    border-radius: 4px;
    bottom: 2rem;
    left: 1rem;
`
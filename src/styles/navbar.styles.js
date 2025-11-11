import styled from "styled-components";


export const NavBarWrapper  = styled.nav`
    width: 100%;
    height: 5em;
    background: rgb(22, 22, 22);
    position: fixed;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 5em;
    color: #fff;
    @media (max-width: 769px){
        padding:  0.625rem 10px;
`

export const Logo = styled.div`
    width: 50px;
    height: 50px;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
`

export const NavListWrapper = styled.ul`
    display:flex;
    gap: 10px;
@media (max-width: 769px){
    display:none;
}
`

export const NavList = styled.li`
    list-style: none;
    font-size: 16px;
    line-height: 19px;
    position: relative;
    color: white;
    cursor: pointer;
`

export const SubNavWrapper = styled.div`
    position: absolute;
    width: 220px;
    display: none;
    left: -8px;
    top: 1.2rem;   

`

export const SubNav = styled.ul`
        width: 100%;
        margin-top: 0.4rem;
        background: rgba(17, 17, 17);
        display: flex;
        flex-direction: column;
        gap: 1px;
`

export const SubNavList = styled.li`
        width: 100%;
        list-style:none;
        padding: 0.9375rem 0.3125rem;
        margin-left: 0;
        transition: .3s ease;
        color:white;
    }         
    &hover {
        background: rgba(40, 40, 43, 0.466);
    }
`
export const Contact = styled.div`
@media (max-width: 769px){
    display:none;
}
`






export const MobileNav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1.3rem;
    justify-content: space-between;
`;

export const MobileNavList = styled.ul`
    width: 100%;
    padding: 0px 10px;
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

export const SubListMobile = styled.li`
  position: relative;
  transition: all 1.3s ease-in-out;
  padding: 0; 

  &:hover {
    background: none !important; 
}
`

export const SubNavMobile = styled.div`
    width: 100%;
    display: none;
    top: 1.2rem;
`;

export const SubNavMobileUl = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1px;
`

export const SubNavMobileLi = styled.li`
    list-style: none;
    padding: 13px;
    border-radius: 3px;
    color: #fff;
    font-weight: 400;
    transition: .3s ease-in-out;
    background: rgb(22, 22, 22);

  &:hover {
    background: rgba(107, 107, 107, 0.466);
  }
`
export const MobileBtn = styled.span`
    position: absolute;
    color: #fff;
    cursor: pointer;
    border: .9px solid #fff;
    padding: 10px;
    border-radius: 4px;
    bottom: 2rem;
    left: 1rem;
`
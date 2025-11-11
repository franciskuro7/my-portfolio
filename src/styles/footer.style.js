import styled from "styled-components"

export const FooterWrapper = styled.footer`
    width: 100%;
    height: inherit;
    background: rgb(22, 22, 22);
    display: flex;
    gap: 2em;
    justify-content: space-between;
    padding: 30px 5em;
    color: #fff;

    h2{
        font-size: 1.6rem;
        font-weight: 400;
        margin-bottom: 2rem;
    }
@media screen and (max-width: 769px){
    padding: 20px;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 1.4rem;
        line-height: 1rem;
}
}
`

export const Mail = styled.div`
    display: flex;
    gap: 5px;
    align-items:center ;
`

export const MailContent = styled.div`
    text-decoration: none;
    color: white;
    font-size: 19px;

    @media screen and (max-width: 769px){
        font-size: 17px;
    }
`

export const MailIcon = styled.div`
    text-decoration: none;
    color: white;
    font-size: 25px;

    @media screen and (max-width: 769px){
    
    }
`
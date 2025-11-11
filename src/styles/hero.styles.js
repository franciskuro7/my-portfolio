import styled from "styled-components";

export const HeroWrapper = styled.div`
    width: 100%;
    display:flex;
    background:#080808;
    padding:9rem 5rem ;

    @media  (max-width: 768px){
        flex-direction:column;
        padding: 5.5rem 1rem ;
        maringTop:2rem;
    }
`

export const HeroContent = styled.div`
    flex:1;
    padding:10px;
`

export const Profile = styled.div`
    padding:1rem 4rem;
   
    h1{
        font-size:1.8rem;
        font-weight:bold;
        color:white;
        line-height:2rem;
        margin-bottom:1rem;
    }
    p{
        font-size:14px;
        text-align:justify;
        font-family:Agency FB;
        line-height:1.2rem;
    }
        @media  (max-width: 481px){
            padding:1rem 1rem;        
            h1{
                font-size:1rem;
                font-weight:bold;
                color:white;
                line-height:1.4rem;
                margin-bottom:1rem;
            }
            p{
                font-size:14px;
                text-align:justify;
                font-family:Agency FB;
                line-height:1.2rem;
            }
    }
`

export const CardWrapper = styled.div`
    flex:1;
    align-items;
    padding:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:1rem;
    @media (max-width:768px){
        padding:1rem;
    }
    `
export const Card = styled.div`
    width:380px;
    height:220px;
    background:#202020;
    border-radius:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:10px;
    &:hover{
        transform: skew(2deg, 1deg);
    }
        @media (max-width:481px){
        width:100%;
        padding:1rem;
        // background:red;
    }
`

export const Image = styled.img`
    width:100px;
    height:100px;
    border-radius:50%;
    object-fit:fill;
    align-self:center;
`


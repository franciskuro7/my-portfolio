import styled from "styled-components";

export const MyOffer = styled.div`
    width:100%;
    padding: 5rem;
    background:rgb(0, 0, 0);

    h1{
        font-size: 47px;
        font-weight: 600;
        line-height: 1.25rem;
        color: rgb(255, 255, 255);
        text-align:center;
        margin-bottom:3rem;
    }

    h1 span{
        color: blue;
        font-size: 47px;
        font-weight: 600;
        line-height: 56.4px;
    }

    @media(max-width:768px){
        h1{
            font-size: 2rem;
        }
}

    @media(max-width:481px){
        padding:2rem;
        h1{
            font-size: 1.5rem;
        }
        h1 span{
            font-size: 1.5rem;
        }
    }

`
export const CardWrapper = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap:2rem;
    margin-top:2rem;
    margin:auto;

    .card{
        border:1px solid rgba(82, 82, 82, 0.45);
        border-radius:1rem;
        padding:2rem;
        background:rgba(23, 23, 23, 0.61);
    }

    h2{
        font-size: 20px;
        font-weight: 600;
        line-height: 3rem;
        color: rgb(255, 255, 255);
    }
  
    .icons{
        width: 60px;
        height: 65px;
        color: blue;
        font-size: 6rem;
        padding: 0.5rem;
        background: rgb(38, 38, 38);
        border:1px solid rgb(73, 72, 72);
        border-radius:0.625rem;
        margin:1rem 0px;
        opacity:0.6;
    }

    p{
        font-size: 16px;
        font-weight: 300;
        line-height:1.25rem;
        color: rgb(158, 158, 158);
    }
`
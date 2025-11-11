import styled from "styled-components";


export const ServicesWrapper = styled.div`
    width:100%;
    padding:2rem 6rem;
    h1{
        text-align:center;
        color:white;
        font-size:1.3rem;
    }
    @media (max-width: 769px){
        padding:2rem 0.625rem;
    }
}
`
export const ServicesContainer = styled.div`
    width:100%;
    padding: 1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
`
export const ServicesContent = styled.div`
    width:100%;
    background:pink;
    display:flex;
    align-items:center;
    background:#202020;
    padding:2rem 1rem;
    gap:10px;
    @media (max-width: 900px){
        flex-direction:column;
        text-align:self-start;
        padding:1rem;
    }
`

export const ServiceContentTextHeader  = styled.div`
    width:280px;
    display:flex;
    align-items:center;
    gap:5px;
span{
    font-size:1.25rem !important;
    color:white !important;
    opacity:0.6;
}
h1{
    font-size:1.25rem !important;
}
@media (max-width: 900px){
    align-items: self-start;
    width:100%;

span{
    font-size:0.625rem;
    color:red;
}

h1{
    font-size:1rem;
}
}
`
export const ServiceContentText = styled.div`
    flex:1;
    display:flex;
    gap:10px;
    align-items:center;
    color:white;

    @media (max-width: 900px){
        width:100%;
    }
`

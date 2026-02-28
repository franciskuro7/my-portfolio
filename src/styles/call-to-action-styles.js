import styled from "styled-components";

export const ButtonWrapper = styled.button`
    background-color: #4658f5;
    border:1px solid white;
    color: white;
    padding: 7px 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition:  0.3s ease;
   &&hover{
       transform: scale(1.1);
   }
`
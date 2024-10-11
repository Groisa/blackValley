import { styled } from "styled-components";



export const ContainerMyInstagram = styled.div`
    margin-top: -450px;
    padding: 30px;

    align-items: flex-end;
    @media(max-width: 765px){
        margin-top: -50px;
        padding: 0px;
    }
`

export const ContainerInstaCard = styled.div`
    min-width: 205px;
    min-height: 236px;
    max-width: 205px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    padding: 10px;
   border: #fff  solid 1px;
   gap: 5px;
  
    flex-direction: column;
    text-align: center;
    color: #fff;
`
import { styled } from "styled-components";

export const ContainerGroup = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    div{
        display: flex;
    }
    @media(max-width: 765px){
        div {
            flex-direction: column;
        }
    }
`

export const ArticleImage = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
   

    @media(max-width: 765px){
        flex-direction: column;
    }
`
export const ArticleText = styled.article`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 50%;
    text-align: center;
    
    p{
        font-size: 20px;
        color: #fff;
    }
    @media(max-width: 765px){
        width: 95%;

        p {
            text-align: justify;
        }
    }
`
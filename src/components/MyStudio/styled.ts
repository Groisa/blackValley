import { styled } from "styled-components";




export const ContainerMyStudio = styled.div`
    display: flex;
    margin-top: 40px;
    padding: 30px;
    
    h2 {
        color: #fff;
        font-size: 40px;
        font-weight: 800;
    }
    p {
        text-align: justify;
        width: 80%;
        color: #fff;
        margin-top: 20px;
    }
    @media(max-width: 765px){
        padding: 0;
        text-align: center;
        p{
            width: 100%;
        }
        flex-direction: column;
    }

`
export const BlurOut = styled.div`
    background-color: rgb(255,255,255,0.3);
    height: 400px;
    width: 400px;
    position: relative;
    top: -500px;
    z-index: -1;
    border-radius: 100%;
    filter: blur(100px);
`


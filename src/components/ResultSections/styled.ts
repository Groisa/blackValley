import { styled } from "styled-components";

export const ContainerResults = styled.div`
    display: flex;
    margin-top: 30px;
    @media(max-width: 765px){
        flex-direction: column;
    }
`

export const ResultsTeamContainer = styled.div`
    padding-top: 50px;
    padding-left: 15px;
    position: relative;
    display: flex;
    margin-left: -100px;
    flex-direction: column;
    gap: 20px;
    p{
        color: #fff;
        width: 90%;
        text-align: justify;
    }
    @media(max-width: 765px) {
        
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-left: 0;
        p{
            width: 100%;
            text-align: justify;
        }
    }
    
`
export const BlurOut = styled.span`
    background-color: rgb(255,255,255,0.2);
    height: 400px;
    width: 400px;
    position: relative;
    top: 0px;
    left:-200px;
    z-index: -1;
    border-radius: 100%;
    filter: blur(100px);
`
export const CardContainerResult = styled.div`
    width: 316px;
    height: 373px;
    background: #000;
    border-radius: 20px ;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
`
import styled from "styled-components";


interface PropsComponent {
    backgroundColor: string;
}


export const TopHeader = styled.nav`
    @media(min-width: 765px){
        width: 100%;
         color: #fff;

            display: flex;
            justify-content: space-between;
    
    
    div:first-child {
        display: flex;
        gap: 20px;
    }
    
    a {
        &:hover {
            scale: 1.03;
            text-decoration: underline;
            transition: 0.2s;
        }
    }
    }
`


export const MainHeader = styled.div`
    display: flex;
    
    div:first-child {
        display: flex;
        width: 60%;
        padding: 30px;
        flex-direction: column;
        gap:    40px;
        h1 {
            font-size: 75px;
            color: #fff;
            font-weight: 900;
        }
        h2 {
            color: #fff;
            font-size: 35px
        }
        h3 {
            font-size: 20px;
            color: #fff;
            
        }
       
    }
    @media(max-width: 765px){
        div:first-child {
        display: flex;
        width: 50%;
        padding: 30px;
        flex-direction: column;
        gap:    40px;
        h1 {
            font-size: 60px;
            color: #fff;
            font-weight: 900;
        }
        h2 {
            color: #fff;
            font-size: 35px
        }
        h3 {
            font-size: 20px;
            color: #fff;
            
        }
       
    }
    }
    

    
`

export const ContainerImage = styled.div`

       position: absolute;
       right: 0px ;
       top: 0px

`
export const BlurOut = styled.span`
    background-color: rgb(255,255,255,0.2);
    height: 400px;
    width: 400px;
    position: absolute;
    top: 120px;
    border-radius: 100%;
    filter: blur(100px);
`

export const ContainerCardStyled = styled.div<PropsComponent>`
    background:${props => props.backgroundColor};
    border-radius: 20px;
    width: 250px !important;
    min-width: 250px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    flex-direction: column !important;
    height: 100px;


    h4 {
        font-weight: 700;
        color: ${props => props.backgroundColor === `linear-gradient(180deg, #988FFF 0%, #6155ED 100%)` ? "white" : "black"}
    }
    p{
        color: #C2BFE8;
        font-weight: 600;
    }

    &:hover {
        cursor: pointer;
        scale: 1.01;
    }
`

interface PropsContainerNav {
    menuOpen?: boolean;
    width?: number;
}

export const ContainerNav = styled.nav<PropsContainerNav>`
    color: #fff;
    font-size: 18px;
    margin-left: -30px;
    flex-direction: column;
    background-color: rgb(000,000,000, .5);
    display: flex;
    align-items: center;
    position: ${({ menuOpen }) => menuOpen === false ? 'absolute' : 'fixed'};
    transition: 1s;
    top: ${({ width, menuOpen }) => menuOpen === false ? -Number(width) : 49}px;
    gap: 20px;
    padding: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: ${({ width }) => width}px;
    z-index: 9999;
`
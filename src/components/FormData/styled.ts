import { styled } from "styled-components";


interface ElipseProps {
    order?: 'secondary' | 'primary';
}


export const ContainerFormData = styled.div`
    
    width: 100%;
    display: flex;
    margin-top: 40px;

    @media(max-width: 765px){
        flex-direction: column;
    }
`
export const ElipseLogo = styled.div<ElipseProps>`
    width: 247px;
    height: 247px;
    background: rgb(255,255,240);
    background: linear-gradient(0deg, rgba(255,255,240,0.9948354341736695) 12%, rgba(114,107,139,1) 46%, rgba(0,0,0,1) 99%);
    border-radius: 100%;
    
    position: ${props => props.order && 'relative'};

    top: ${props => props.order && props.order === 'primary' ? -20 : -210}px;
    right: ${props => props.order && props.order === 'secondary' && '-20%'};
    left: ${props => props.order && props.order === 'primary' && '-25%'};

    @media(max-width: 765px){
        width: 200px;
        height: 200px;
    }

`

export const ContainerElipse = styled.section`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;

 
`

export const ContainerRightFormData = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:30px;

   
`
export const FormContainerData = styled.section`
    border-radius: 16px;
    background-color: #000;
    box-shadow: 3px 3px 2px 2px rgba(255, 255, 255,0.6);
    width: 100%;
    height: 450px;
    justify-content: center;
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
`
export const ButtonForm = styled.button`
    width: 80%;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 30px ;
    font-weight: 600;
    border-radius: 16px;
    background-color: #FFE53B;
background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);

    

    @media(max-width: 768px){
        font-size: 20px;
    }
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #fff;
    input {
        background-color: #fff !important;
        border: rgba(0,0,0,0.5);
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
        height: 40px;
        color: #fff;
        max-width: 340px;
        min-width:340px;
        color: #000 !important;
        padding: 5px;
        &:hover{
            border:  rgba(0,0,0,0.3);
            border-radius: 10px;
            scale: 1.02;
            border-width: 1px;
            border-style: solid;
        }
    }
    @media(max-width: 765px){
        input {
            min-width:220px;
            width: 220px;
        }
    }
`
export const CheckBox = styled.input`
 &::before{
    
    position: absolute;
      display: block;
      left: 0;
      top: 0;
      content: "";
      background: transparent;
 }
 &::after{
    position: absolute;
      display: block;
      top: 5px;
      left: 8px;
      content: "";
      width: 3px;
      height: 7px;
      border-right: 1px solid transparent;
      border-bottom: 1px solid transparent;
      transform: rotate(45deg);

      transition: 200ms ease-in-out all;
 }
`
import React from 'react';
import { ButtonFloarting } from './styled';
import { AiOutlineArrowUp } from 'react-icons/ai';

// import { Container } from './styles';

const ButtonFloating: React.FC = () => {
    return (
        <ButtonFloarting
            onClick={() => window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })}
        >
            <AiOutlineArrowUp
                size={25}
                color="#000"
            />
        </ButtonFloarting>
    );
}

export default ButtonFloating;
import React, { useState, useEffect } from 'react';

// import { Container } from './styles';
import styles from './modal.module.css'
import { ModalBody, ModalDialog } from './modal';
interface ModalProps {
    showModal: boolean;

    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ showModal, children }) => {
    const [show, setShow] = useState<boolean>(false)
    useEffect(() => {
        setShow(showModal)
    }, [showModal])
    return (
        <ModalDialog
            open={show}

        >
            <ModalBody>
                {
                    children
                }
            </ModalBody>
        </ModalDialog>
    );
}

export default Modal;
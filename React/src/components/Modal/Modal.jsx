import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent/ModalContent';

const modals = document.querySelector('#modals');

const Modal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>
                Show modal using a portal
            </button>

            {showModal && createPortal(
                <ModalContent
                    onClose={() => setShowModal(false)}
                    children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vero aliquid, laborum consectetur porro libero." />,
                modals
            )}
        </>
    );
}
export default Modal;
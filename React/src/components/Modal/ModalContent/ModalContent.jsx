import './ModalContent.css';
import { useEffect } from 'react';

const ModalContent = ({ children, onClose }) => {

    useEffect(() => {
        console.log('Modal created');
        return () => {
            console.log('Modal removed');
        };
    }, []);


    return (
        <div className="wrapper">
            <div className="modal">
                <button onClick={onClose}>X</button>
                <div>{children}</div>
            </div>
        </div>
    );
}

export default ModalContent;
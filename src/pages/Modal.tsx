import React, { useEffect, useState } from 'react';
import '../styles/modal.css';
import iss from '../assets/hasbulla2.gif';
import sol from '../assets/sol.png';

interface Props {
    handleModalClose: any,
    handleModalOpen: () => void,
    setIsJoke: any;
}

const Modal: React.FC<Props> = ({ handleModalClose, handleModalOpen }) => {
    const [btcAmount, setBtcAmount] = useState(1);

    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === "Escape" ? handleModalClose() : null);
        document.body.addEventListener("keydown", closeOnEscapeKey);
        document.body.style.overflow = 'hidden';

        const intervalId = setInterval(() => {
            setBtcAmount(prev => +(prev + 0.01).toFixed(4));
        }, 50);

        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
            document.body.style.overflow = 'auto';
            clearInterval(intervalId);
        };
    }, [handleModalOpen, handleModalClose]);

    return (
        <div className="modal-overlay" onClick={handleModalOpen}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h4>Congratulations your wallet drained! Thanks for participating 😊</h4>
                <div className='modal_inside'>
                    <img src={sol} alt='sol'/>
                    <h5>We stole {btcAmount.toFixed(2)} SOL</h5>
                    <img src={sol} alt='sol'/>
                </div>
                <img src={iss} />
                <button onClick={handleModalClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;
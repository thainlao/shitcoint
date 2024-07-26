import React, { useEffect } from 'react';
import '../styles/buymodal.css';
import hasbula from '../assets/hasbulla.gif';

interface Props {
    howToBuyModalClose: () => void;
}

const HowToBuyModal: React.FC<Props> = ({ howToBuyModalClose }) => {

    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === "Escape" ? howToBuyModalClose() : null);
        document.body.addEventListener("keydown", closeOnEscapeKey);

        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [howToBuyModalClose]);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            howToBuyModalClose();
        }
    };

    return (
        <div className='modal-overlay' onClick={handleOverlayClick}>
            <div className="how_modal-content">
                <h3>If you are new to shitcoins it’s as simple as that</h3>
                <span>Step 1</span>
                <h4>Send sol to the wallet below and you will get it doubled in the next few minutes.</h4>
                <span style={{color: 'white'}}>Dy9kwgbFzy49so2omSHPf6JJgeLF1dVTry4HAmuM9mP</span>
                <span>Step 2</span>
                <h4>Enjoy your profits, you don’t need 9/5 job anymore.</h4>
                <img src={hasbula} />
                <button onClick={howToBuyModalClose}>Close</button>
            </div>
        </div>
    )
}

export default HowToBuyModal;

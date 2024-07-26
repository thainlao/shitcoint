import { useState } from 'react';
import '../styles/body2.css';
import Modal from '../pages/Modal';
import tg from '../assets/tg.png';
import x from '../assets/x.png';
import gif from '../assets/gif3.gif';
import copy from '../assets/copy.png';
import HowToBuyModal from '../pages/HowToBuyModal';

const Body2 = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isJoke, setIsJoke] = useState<boolean>(false);
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const [isHowToBuyOpen, setIsHowToBuyOpen] = useState<boolean>(false);

    const handleCopyClick = () => {
        const textToCopy = "2fTxqgSAm5gx8RC9RgnoyE1qe1tXZyNh6ShdRHSTGJTe";
        navigator.clipboard.writeText(textToCopy).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        });
    };

    const handleModalOpen = () => {
        setIsModalOpen((prev) => !prev);
    };

    const handleModalClose = () => {
        setIsModalOpen((prev) => !prev);
        setIsJoke(true);
    }

    const howToBuyModalClose = () => {
        setIsHowToBuyOpen((prev) => !prev);
    }

    const handleHowToBuyModalOpen = () => {
        setIsHowToBuyOpen(true);
    }

    return (
        <div className='body2'>
            <div className='wallet'>
                <h1>2fTxqgSAm5gx8RC9RgnoyE1qe1tXZyNh6ShdRHSTGJTe</h1>
                <button onClick={handleCopyClick}>
                    <img src={copy} alt="Copy" />
                </button>
                {isCopied && <span className="copied-message">Copied!</span>}
            </div>
        
            {!isJoke ? <h2>Join to nothing and you may receive something</h2> : 
            <div className='body2_div'>
                <h2><span>Relax</span> click bellow to get <span>drained</span></h2>
                <img src={gif}/>
            </div>}

            {!isJoke 
            ? <button className='singlebutton_main' onClick={handleModalOpen}>Click it •ﻌ•</button> 
            : <div className='butbuttons'>
                <a href='' className='butbutton'>BUY</a>
                <button onClick={handleHowToBuyModalOpen} className='howtobut'>HOW TO BUY</button>
            </div>}

            {isJoke ?
            <div>
                <div className='allbuttons'>
                    <a href='https://solscan.io/account/9wvEoGCUGL4pMYY6ehWdpjQGVH1M9cHT3fpMdMNBnAub' className='singlebutton'>Dev Wallet</a>
                    <a href='https://solscan.io/account/2HVyw2Jm93A9SeJzbiFsJgxNS5U7XGzTSaLv2y5cgdzd' className='singlebutton'>Marketing wallet</a>
                </div>
            </div> :
            ''}

            {isModalOpen && <Modal 
            setIsJoke={setIsJoke} 
            handleModalOpen={handleModalOpen} 
            handleModalClose={handleModalClose} />}

            <div className='bottom_links'>
                <a href='https://t.me/NothingToSomethinggg'>
                    <img src={tg} alt="tg"/>
                </a>
                <a href='https://x.com/NothingToSmthng'>
                    <img src={x}  alt="x"/>
                </a>
            </div>

            {isHowToBuyOpen && <HowToBuyModal 
            howToBuyModalClose={howToBuyModalClose}
            />}
        </div>
    );
}

export default Body2;

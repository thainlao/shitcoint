import '../styles/body.css';
import '../styles/header.css'
import { ReactMatrixAnimation } from 'react-matrix-animation';
import { ReactTyped } from "react-typed";
import gif from '../assets/git1.gif';
import { useEffect } from 'react';

const Body = () => {

    useEffect(() => {
        function spark(event: MouseEvent) {
            const i = document.createElement("i");
            i.style.left = event.pageX + "px";
            i.style.top = event.pageY + "px";
          
            i.style.transform = `scale(${Math.random() * 2 + 1})`;
            i.style.setProperty("--x", getRandomTransitionValue());
            i.style.setProperty("--y", getRandomTransitionValue());
            
            const sparkContainer = document.getElementById("spark-container");
            if (sparkContainer) {
                sparkContainer.appendChild(i);
            }
          
            setTimeout(() => {
                if (sparkContainer) {
                    sparkContainer.removeChild(i);
                }
            }, 2000);
        };
          
        function getRandomTransitionValue(): string {
            return `${Math.random() * 400 - 200}px`;
        }

        document.addEventListener("mousemove", spark);

        return () => {
            document.removeEventListener("mousemove", spark);
        };
    }, []);

    return (
        <div className='body'>
            <div id="spark-container"></div>
            <ReactMatrixAnimation 
            fontColor = "#f200b2"
            fadeFactor={0.05}
            />
            <div className='header'>
                <section>
                    <h2>
                        NOTHING TO $OMETHING
                    </h2>
                    <div className='psyco'></div>
                </section>
            </div>

            <div className='centerbody'>
                <ReactTyped 
                strings={[
                    "Hey bitch",
                    "Tired of losing money?",
                    "Indian dev took the last penny from your wallet?",
                    "You have 10 kids you need to feed?",
                    "Don’t worry >",
                    "Click bellow &#9660;",
                    "🙂"
                ]}
                typeSpeed={30}
                backSpeed={25}
                loop
                />
            
            </div>
            <a className='linkbut' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>YOU SHOULD NEVER CLICK THIS ≽ܫ≼</a>
        </div>
    )
}

export default Body;
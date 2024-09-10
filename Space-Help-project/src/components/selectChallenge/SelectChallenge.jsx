import { useState, useEffect } from "react";
import useSound from "use-sound";
import challengeIcon from '../../assets/icons/nave-grain.png';
import completeChallengeIcon from '../../assets/icons/nave-complete.png';
import openChallenge from '../../assets/sounds/navhover.mp3'
import './SelectChallenge.css'

function SelectChallenge ({day}) {

    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        const key = `rest_items${day}`;
        const value = localStorage.getItem(key);
        if (value === '0') {
            setCompleted(true);
        }else{
            setCompleted(false);
        }
    }, [day]);

    const delayRandom = (min, max) => {
        return (Math.random() * (max - min) + min).toFixed(3);
    }

    const [play] = useSound(openChallenge);

    return (

        <div className='complete-challenge-icon m-4 flex w-20'
        style={{animationDelay: `${delayRandom(0, 3)}s`}}>
            <div className='shake-animation'>
                {completed ? ('') : (
                 <p className='z-0 flex justify-center w-20 mt-6 ml-1 inside-number absolute'>{day}</p>)
                }
           
            {completed ? (
                 <img 
                 src={completeChallengeIcon} 
                 alt='' 
                 className='challenge-icon z-0  challenge'
                 onClick={play}
                  />

            ): (
                <img 
                 src={challengeIcon} 
                 alt='' 
                 className='challenge-icon z-0 challenge'
                 onClick={play}
                 />
                 

            )}
           
            </div>
        </div>
    )
}

export default SelectChallenge
import { useState, useEffect } from "react";
import Initial from '../../assets/icons/initial-grain.png';
import Recycle from '../../assets/icons/recycle-grain.png';
import Donate from '../../assets/icons/donate-grain.png';
import Sell from '../../assets/icons/sell-grain.png';
import changeState from '../../assets/sounds/changestate.mp3';
import useSound from 'use-sound';
import './Item.css'

const Item = ({handleStatusUpdate, id, day}) => {

    const icons = [Initial, Recycle, Donate, Sell];
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handleChangeActive = () => {
        setCurrentIndex((currentIndex + 1) % icons.length);

        handleStatusUpdate(id, (currentIndex + 1) % icons.length) 
    };

    useEffect(() => {
        const data = window.localStorage.getItem(`item_${day}_${id}`);
        let parsedData = JSON.parse(data);
        if (parsedData) setCurrentIndex(JSON.parse(data))

    }, [id])

    useEffect(() => {
        localStorage.setItem(`item_${day}_${id}`, JSON.stringify(currentIndex))
    }, [currentIndex, id])

    const delayRandom = (min, max) => {
        return (Math.random() * (max - min) + min).toFixed(3);
    }

    const [play] = useSound(changeState);

    return (
        <div>
    
                  <img
                  className={`single-item active w-28`} 
                  src={icons[currentIndex]} 
                  alt={`${currentIndex + 1}`}
                  state={currentIndex}
                  onClick={()=> {
                    handleChangeActive();
                    play();
                  } }
                  style={{animationDelay: `${delayRandom(0, 3)}s`}}
                   />
                
        </div>
    )
}



export default Item
import ProgressBar from "../progressbar/ProgressBar";
import alien from '../../assets/icons/alien-and-cow.png';
import { useState, useEffect } from "react";
import './Progress.css';

function Progress ()  {

    const [daysCompleted, setDaysCompleted] = useState(0);
    const [recycled, setRecycled] = useState(0);
    const [donated, setDonated] = useState(0);
    const [sell, setSell] = useState(0);


    useEffect(() => {
        let count = 0;
    for ( let i = 1;  i <= 10; i++){
        const key = `rest_items${i}`;
        const value = localStorage.getItem(key); 
        const parsedValue = JSON.parse(value);
        if (parsedValue === 0){
        count++;
    }
    }
    setDaysCompleted(count);
}, [] );

    // use temporary counters, accumulate the count for each loop.
    useEffect(() => {
        let recycledCount = 0;
        let donatedCount = 0;
        let sellCount = 0;
    for (let i = 0; i <= 10; i++){
        const data = localStorage.getItem(`items${i}`);
        const parsedData = JSON.parse(data);
        if (parsedData){
            recycledCount += parsedData.filter((item) =>item.status == '1').length;
            donatedCount += parsedData.filter((item) => item.status == '2').length;
            sellCount += parsedData.filter((item) => item.status == '3').length;
            console.log(parsedData);
        } 
        }

        setRecycled(recycledCount);
        setDonated(donatedCount);
        setSell(sellCount);
       
    }, [] );

    const totalItems = recycled + donated + sell;
      
    return(
    <>
    <main className='default-container'>
        <div className='progress-header flex flex-col m-4'>
        <h1 className='self-center'>Let´s check your progress!</h1>
        <img src={alien} alt='alien abducting a cow' className='w-24 self-center shake-animation'/>
        </div>
        <div className='bars-container flex flex-col gap-4 mb-4'>
        <div className="items-total individual-container p-2 flex flex-col self-center w-1/2 gap-2 items-center">
            <p className=''>You have eliminated  {totalItems} items</p>
            <ProgressBar color={'var(--spaceblue)'} width={'18px'} value={totalItems} max={120} > </ProgressBar>
        </div>
        <div className="individual-container p-2 flex flex-col self-center w-1/2 gap-2 items-center">
            <p>You completed {daysCompleted} days.</p>
            <ProgressBar color={'var(--spacegreen)'} width={'18px'} value={daysCompleted} max={15} ></ProgressBar>
        </div>
        <div className="items-recycled individual-container p-2 flex flex-col self-center w-1/2 gap-2 items-center">
            <p>You have recycled {recycled} items</p>
            <ProgressBar color={'var(--spacepink)'} width={'18px'} value={recycled} max={totalItems} ></ProgressBar>
            <p>{Math.round((recycled/totalItems) * 100)} % of your items</p>
        </div>
        <div className="items-donated individual-container p-2 flex flex-col self-center w-1/2 gap-2 items-center">
            <p>You have collected {donated} items for donation</p>
            <ProgressBar color={'var(--spaceorange)'} width={'18px'} value={donated} max={totalItems} ></ProgressBar>
            <p>{Math.round((donated/totalItems) * 100)} % of your items</p>
        </div>
        <div className="items-sell individual-container p-2 flex flex-col self-center w-1/2 gap-2 items-center">
            <p>You have collected {sell} items to sell</p>
            <ProgressBar color={'var(--spacepurple)'} width={'18px'} value={sell} max={totalItems} ></ProgressBar>
            <p>{Math.round((sell/totalItems) * 100)} % of your items</p>
        </div>
        </div>
    </main>
    
    </>)
}

export default Progress
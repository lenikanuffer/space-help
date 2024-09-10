import { useState, useEffect } from 'react';
import alien from '../../assets/icons/alien-and-cow.png';
import ChallengesToSelect from '../challengeToSelect/ChallengeToSelect';
import ProgressBar from '../progressbar/ProgressBar';
import './Welcome.css'

function Welcome () {

    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const [daysCompleted, setDaysCompleted] = useState(0);
    const [itemsCompleted, setItemsCompleted] = useState(0);

    useEffect(() => {
            let count = 0;
            days.map((i) => {
            const key = `rest_items${i}`;
            const value = localStorage.getItem(key); 
            const parsedValue = JSON.parse(value);
            if (parsedValue === 0){
            count++;

        }
        }
        )
       
        setDaysCompleted(count);

    }, [] );

    useEffect(() => {
        let itemsCount = 0;
        days.map((i) => {
        const data = localStorage.getItem(`items${i}`);
        const parsedData = JSON.parse(data);
        if (parsedData){
            itemsCount += parsedData.filter((item) =>item.status == '1' || item.status == '2' || item.status == '3').length;
            console.log(parsedData);
        } 
        }
        )

        setItemsCompleted(itemsCount);
       
    }, [] );

    return ( 
        <main className='challenge-container mb-10 flex flex-col items-center'>
            <div className='challenge-header p-4 flex gap-4 justify-center w-11/12 align-middle'>
                <div className='progress-icon-container m-0'>
                <img src={alien} alt='' className='progress-icon w-24 ml-4 shake-animation'/>
                </div>
                <div className='flex flex-col ml-14'>
                <h1 className='p-1'> {daysCompleted} days decluttering!</h1>
                <ProgressBar color={'var(--spacegreen)'} width={'18px'} value={daysCompleted} max={15} ></ProgressBar>
                 <h1 className='p-1'>{itemsCompleted} items removed!</h1>
                 <ProgressBar color={'var(--spaceblue)'} width={'18px'} value={itemsCompleted} max={120} ></ProgressBar>
                </div>
            </div>
            <div className='items-container flex flex-col pt-6'>
                <div className='flex justify-center '>
                    <h1 className=''>Select a new challenge</h1>
                </div>
                    <div className='select-challenge-icons flex flex-wrap justify-center '>
                         <ChallengesToSelect 
                         days={days}
                         /> 

                   </div>
            </div>
        </main> 
    )
}

export default Welcome
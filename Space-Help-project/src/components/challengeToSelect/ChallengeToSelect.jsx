import { useEffect, useState } from "react";
import SelectChallenge from "../selectChallenge/SelectChallenge";
import {Link} from 'wouter';

function ChallengesToSelect ({days}) {

    return (
        <>
        {days.map((day) => (
             <Link 
                href={`/Challenge/${day}`}
                key={day} >
            <SelectChallenge
            key={day}
            day={day}
             />
             </Link>
        ))}
        </>
    );

}

export default ChallengesToSelect
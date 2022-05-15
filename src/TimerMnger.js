import React,{useState} from 'react';
import Timer from './Timer.js';

const TimerMnger = () => {
    const [timerNames,settimerNames] = useState ([ 'Names', 'Chicken', 'Meditation' ]);
    const [name , setName] = useState('')
    return (
        <div className='Timer Mange'>
            <form onSubmit={(event) => {
                event.preventDefault()
                const copyOfTimerName = [...timerNames]
                copyOfTimerName.push(name)
                settimerNames(copyOfTimerName)
                setName("")
            }}>
                Add name
                <input className='Mange-input' value={name} onChange={(event) => setName(event.target.value)} />
                <button className='Mange-button'>Add new Timer</button>
            </form>
            {timerNames.map((timerName,index) => (
        <Timer key={index} name={timerName} />
      )
				
			)}
        </div>
    )
} 
export default TimerMnger;
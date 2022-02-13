import Mole from '../Mole/Mole'
import EmptySlot from '../EmptySlot/EmptySlot'
import './MoleContainer.css'
import { useState } from 'react'

function MoleContainer (props) {

    const [ displayMole, setDisplayMole ] = useState(false);

    function popMole () {
        setDisplayMole(false);
        props.setScore(props.score + 1)
    }

    function moleState () {
        if(displayMole) {
            return (
                <Mole popMole={ popMole } setDisplayMole={ setDisplayMole } mole={ props.mole }></Mole>
            )
        } else {
            return (
                <EmptySlot setDisplayMole={ setDisplayMole }></EmptySlot>
            )
        }
    }

    return (
        <div className='mole-container'>
            
            { moleState () }
            
        </div>
    )
} 

export default MoleContainer
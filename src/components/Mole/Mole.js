import { useEffect } from 'react'
import moleImg from './mole.png'

function Mole (props) {

    useEffect ( () => {

        let randSecond = Math.ceil (Math.random() * 5000)
        let timer = setTimeout (() => {
            props.setDisplayMole(false)
        }, randSecond)

        return () => {
            clearTimeout(timer)
        }
    })

    return  (
        <div id={"mole" + props.mole }>
            <img src= {moleImg} alt="mole" onClick={ props.popMole }/>
           
        </div>
    )
}

export default Mole
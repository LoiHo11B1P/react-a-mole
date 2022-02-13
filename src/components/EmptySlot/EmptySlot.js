import hillImg from './molehill.png'
import { useEffect } from 'react'

function EmptySlot (props) {

    useEffect( () => {
        let randSecond = Math.ceil (Math.random() * 5000)
        let timer = setTimeout (() => {
            props.setDisplayMole(true)
        }, randSecond)

        return () => {
            clearInterval(timer)
        }
    }) 

    return (
        <div>
            <img src= { hillImg } alt="mole hill" />
        </div>
    )
}

export default EmptySlot;
import React from 'react'
import MealCard from '../../Components/MealCard'
import './styles.scss'

const Welcome = () => {

    return (
        <div className={"welcomePage-wrapper"}>
            <div className={'welcomePage-titles'}>

                <p>Za vous za plus ?</p>
                <MealCard />
            </div>
        </div>
    )
}

export default Welcome;   
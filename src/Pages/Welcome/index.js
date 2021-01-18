import React from 'react'
import MealCard from '../../Components/MealCard'
import './styles.scss'

const Welcome = () => {

    return (
        <div className={"welcomePage-wrapper"}>
            <div className={'welcomePage-titles'}>
                <h3>Za vous za plus ?</h3>
                <MealCard />
            </div>
        </div>
    )
}

export default Welcome;   
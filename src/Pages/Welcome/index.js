import React, { useState, useEffect } from 'react'
import MealCard from '../../Components/MealCard'
import { GoSync } from 'react-icons/go';
import { getNewMeal } from './api'

import './styles.scss'

const Welcome = () => {
    const [currentMeal, setCurrentMeal] = useState('')

    useEffect(() => {
        setCurrentMeal(getNewMeal())
    })

    return (
        <div className={"welcomePage-wrapper"}>
            <div className={'welcomePage-titles'}>
                <h3>Za vous za plus ?</h3>
                <MealCard onClick={() => null} meal={currentMeal} />
            </div>

            <div className={'reshuffle-wrapper'}>
                <div className={'reshuffle'}>
                    <GoSync onClick={() => setCurrentMeal(getNewMeal())} />
                </div>
            </div>
        </div>
    )
}

export default Welcome;   
import React from 'react'
import MealCard from '../../Components/MealCard'
import { GoSync } from 'react-icons/go';

import './styles.scss'

const Welcome = () => {

    return (
        <div className={"welcomePage-wrapper"}>
            <div className={'welcomePage-titles'}>
                <h3>Za vous za plus ?</h3>
                <MealCard onClick={() => null} />
            </div>

            <div className={'reshuffle-wrapper'}>
                <div className={'reshuffle'} onClick={() => alert('SHUFFLE')}>
                    <GoSync />
                </div>
            </div>
        </div>
    )
}

export default Welcome;   
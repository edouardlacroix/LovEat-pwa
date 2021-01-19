import React from 'react'
import PropTypes from 'prop-types';
import { GiKnifeFork } from 'react-icons/gi';
import { MdDirectionsBike } from 'react-icons/md';
import { FaHandPaper } from 'react-icons/fa';
import { GiShare } from 'react-icons/gi';

import './styles.scss'


const MealCard = (props) => {

    const shareClick = (event) => {
        event.stopPropagation()
        alert('SHARE')
    }

    const mealClick = (event) => {
        event.stopPropagation()
        alert('MEAL')
    }

    return (
        // If disabled, style is grey and onClick return null
        <div className={'mealCard-wrapper noSelect'} onClick={event => mealClick(event)}>
            <div className={'mealCard-title'}>
                <h2>Nom du repas</h2>
                <div className={'separator'} />
            </div>
            <div className={'mealCard-ingredient'}>
                <h3><span>Ingrédients</span></h3>
                <p>Ingredient 1, Ingredient 2, Ingredient 3,  Ingredient 4,  Ingredient 5</p>
            </div>
            <div className={'icons-wrapper'}>
                <GiKnifeFork className={'white enabled'} />
                <MdDirectionsBike className={'white'} />
                <FaHandPaper className={'white'} />
            </div>
            <div className={'share'} onClick={event => shareClick(event)}>
                <GiShare className={'white'} />
            </div>

        </div>
    )

}

MealCard.propTypes = {
    onClick: PropTypes.func.isRequired,
    meal: PropTypes.object.isRequired,
}

export default MealCard

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
        alert('SHARE ' + props.meal?.id)
    }

    const mealClick = (event) => {
        event.stopPropagation()
        alert('MEAL')
    }

    return (
        // If disabled, style is grey and onClick return null
        <div className={'mealCard-wrapper noSelect'} onClick={event => mealClick(event)}>
            <div className={'mealCard-title'}>
                <h2>{props.meal.name}</h2>
                <div className={'separator'} />
            </div>
            <div className={'mealCard-ingredient'}>
                <h3><span>Ingrédients</span></h3>
                <p>{props.meal?.ingredients?.map(item => item + ', ')}</p>
            </div>
            <div className={'icons-wrapper'}>
                <GiKnifeFork className={props.meal?.restaurant ? 'white enabled' : 'white'} />
                <MdDirectionsBike className={props.meal?.delivery ? 'white enabled' : 'white'} />
                <FaHandPaper className={props.meal?.byHand ? 'white enabled' : 'white'} />
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

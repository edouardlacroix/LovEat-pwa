import React from 'react'
import PropTypes from 'prop-types';
import { GiKnifeFork } from 'react-icons/gi';
import { MdDirectionsBike } from 'react-icons/md';
import { FaHandPaper } from 'react-icons/fa';
import './styles.scss'


const MealCard = (props) => {
    return (
        // If disabled, style is grey and onClick return null
        <div className={'mealCard-wrapper'} onClick={() => props.onClick()}>
            <a>{JSON.stringify(props.meal)}</a>
            <div className={'icons-wrapper'}>
                <GiKnifeFork className={'white'} />
                <MdDirectionsBike className={'white'} />
                <FaHandPaper className={'white'} />
            </div>
        </div>
    )

}

MealCard.propTypes = {
    onClick: PropTypes.func.isRequired,
    meal: PropTypes.object.isRequired,
}

export default Button
import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

export default funcion Card ({ id, back, front, flipped, handleClick }) {
    return <div
    className={'flip-container' ${flipped ? 'flipped' : '' }'}
    style={{width, height}}
    onClick={() => handleClick(id)}
    >
    <div className="flipper">
        <img
            style={{width, height }}
            className={flipped ? 'front' : 'back'}
            src={flipped ? front : back}
    </div>
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired;
    fliped: PropTypes.bool.isRequired;
    back: PropTypes.string.isRequired;
    front: PropTypes.string.isRequired;
    height: PropTypes.number.isRequired;
    width: PropTypes.number.isRequired;
}
import React from 'react'
import PropTypes from 'prop-types'

import './style.css';

const Loading = (props) => {
    if (props.active) {
        return (<div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>)
    }
    return null
}

Loading.defaultProps = {
    active: true
}

Loading.propTypes = {
    active: PropTypes.bool
}

export default Loading;
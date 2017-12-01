import React from 'react'
import PropTypes from 'prop-types'

import './Label.css'

const Label = ({ value, size, hidden }) => (
    <span className='label' style={{ fontSize: size }}>{value}</span>
)

Label.propTypes = {
    value: PropTypes.string,
    size: PropTypes.string,
    hidden: PropTypes.bool
};

export default Label;
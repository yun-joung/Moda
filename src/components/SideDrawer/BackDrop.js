import React from 'react'
import '../../style/index.scss';
import PropTypes from "prop-types";

const BackDrop=props =>{
    return (
        <div className="backDrop" onClick={props.click}/>
    )
}

export default BackDrop


BackDrop.propTypes = {
	click: PropTypes.any
};
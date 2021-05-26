import React from 'react'
import '../../style/index.scss'
import '../../style/responsive.scss'
import PropTypes from "prop-types";

const DrawerToggerBut= props => {
    return (
        <button className = "toggle-button" onClick={props.click} >
            <div className = "toggle-buttonLine" />
            <div className = "toggle-buttonLine" />
            <div className = "toggle-buttonLine" />
        </button> 
    )
}

export default DrawerToggerBut

DrawerToggerBut.propTypes = {
	click: PropTypes.any
};
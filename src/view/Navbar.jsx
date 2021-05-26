import React from 'react';
import { logo } from '../components/image/image.js';
import { Link } from 'react-router-dom';
import '../style/index.scss'
import '../style/responsive.scss'
import DrawerToggerBut from '../components/SideDrawer/DrawerToggerBut'
import PropTypes from "prop-types";

const Menu = (props) => {

    return (
        <header className="toolbar" style={{right: "0"}}>
            <nav className="toolbar_nav">
                <div>
                    <DrawerToggerBut click={props.drawerToggleHander} />
                </div>
                <div className="toolbar_logo">
                    <Link to="/">
                            <img
                                src={logo}
                                className="NabLogo"
                                alt="Moda"
                            />
                    </Link>
                </div>
                <div className="spacer"/>

                <div className="toolbar_item">
                    <ul>
                        <li><Link to="/productos">HOMBER</Link></li>
                        <li><Link to="/productos">MUJER</Link></li>
                        <li><Link to="/productos">NIÑO</Link></li>
                        <li><Link to="/compra"><i className="fas fa-shopping-cart"></i></Link></li>
                    </ul>
                    
                </div>


            </nav>
        </header>
            
    )
};

export default Menu

Menu.propTypes = {
	drawerToggleHander: PropTypes.any
};
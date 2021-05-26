import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/index.scss';

const SideDrawer = () => {
    // let drawerClasses = 'sideDrawer';
    // if(props.show){
    //     drawerClasses = 'sideDrawer open'
    // }
    return (
        <nav className="sideDrawer open">
            <ul>
                <li><Link to="/productos">HOMBER</Link></li>
                <li><Link to="/productos">MUJER</Link></li>
                <li><Link to="/productos">NIÑO</Link></li>
                <li><Link to="/compra"><i className="fas fa-shopping-cart"></i></Link></li>
            </ul>
    </nav>
    )
}

export default SideDrawer

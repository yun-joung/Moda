import React from 'react'
import {women} from '../components/image/image'
import '../style/index.scss'
import '../style/responsive.scss'
import ProductBox from '../components/Productos/ProductBox';

function Productos() {
    return (
        <>
        <div className="App">
            <div className="productMain">
                <div className="carouselInner"  style={{ backgroundImage: `url(${women})` }} />
            </div>
            <div className="textCenter">
                <ProductBox />
            </div>
        </div>
            
        </>
    )
}

export default Productos

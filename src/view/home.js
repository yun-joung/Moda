import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import CarouselProducto from '../components/Carousel/CarouselProducto';
import { Link } from "react-router-dom";
import '../style/index.scss'
import '../style/responsive.scss'
import {homeFondo} from '../components/image/image'

const Home = () => {
    return (
    <>
        <div className="App">
           <Carousel />
        </div>

        <div className="transBox" /> 
        <div className="textCenter">
            <h3 >LAS COLECCIONES PARA TODOS LOS GUSTOS Y OCASIONES:</h3>
            <p >VESTIDOS, VAQUEROS, ZAPATOS, BOLSOS Y MÁS. <br/>ECHA UN VISTAZO AHORA A LAS ÚLTIMAS TENDENCIAS EN MODA.</p>
        </div>
        <div className="App">
           <CarouselProducto />
           <Link to="/productos">
                <button className="buttonHome">Más Products</button>
           </Link>
        </div>
        <div className="containerFondo">
            <div className="imageRignt">
                <img src={homeFondo} className="" alt="modaimage" />
            </div>
            <div className="textCenter topMargin">
                <h3 ><i className="fab fa-instagram-square"></i>&nbsp;INSTAGRAM</h3>  
                <h3 ><i className="fab fa-facebook-square"></i>&nbsp;FACEBOOK</h3>  
                <h3 ><i className="fab fa-twitter-square"></i>&nbsp;TWITTER</h3>  
                <h3 ><i className="fab fa-youtube"></i>&nbsp;YOUTUBE</h3> 
            </div>
            
        </div>
    </>
    )
}

export default Home
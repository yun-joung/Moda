import React from 'react';
import '../../style/index.scss';
import { Link } from 'react-router-dom';

export const ImageCard = props => {
    return (
        <div className="container">
            <Link to ="/productos">
                <img src={props.src} className="carucelProductsitem" alt="colleccion" />
                <div className="overlay">
                    <div className="text"><b>{props.title}</b><br />CLP {props.valor}</div>
                </div>
            </Link>
       </div>
    )
}


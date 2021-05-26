import React from 'react'
import { Link } from "react-router-dom";
import { product3 } from '../image/image'

const ProductCard =(props)=>{
    const { id } = props;
    return (
        <div className="imageCard">
            <Link to={"/producto/" + id}>
                <img src={props.img} alt={props.product_name} className="CardImges"
                onMouseOver={e => (e.currentTarget.src = `${product3}`)}
                onMouseOut={e => (e.currentTarget.src = `${props.img}`)}
                />
            </Link>
            <div>
                <h4 className="CardText">{props.product_name}</h4>
                <p className="CardText">Color: {props.color}</p>
                <p className="CardText">Volor: {props.price}</p>
            </div>
        </div>
    )
}

export default ProductCard

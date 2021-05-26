import React from 'react'
import '../../style/index.scss'
import { ImageCard } from './imageCard'
import {  product2, product3, product4, product6 } from '../image/image'

function ProductIntere() {
    return (
        <div className="ProductsInte" style={{marginTop:'100px'}}>
            <h2 style={{marginLeft:'10px'}}><b>TAL VEZ TE INTERESE</b></h2>
            <div className="carucelProductsInte scroll">
                <ImageCard src={product6} title="New 1/26" valor="30.000"/>
                <ImageCard src={product2} title="New 1/34" valor="19.900"/>
                <ImageCard src={product3} title="New 2/15" valor="25.000"/>
                <ImageCard src={product4} title="New 3/27" valor="19.900"/>
            </div>            
        </div>
    )
}

export default ProductIntere

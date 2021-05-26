import React from 'react'
import '../../style/index.scss'
import { ImageCard } from './imageCard'
import { product1, product2, product3, product4, product5, product6, product7} from '../image/image'

function CarouselProducto() {
    return (
        <div className="carucelProducts">
            <div className="carucelProducts scroll">
                <ImageCard src={product1} title="New 1/26" valor="30.000"/>
                <ImageCard src={product2} title="New 1/34" valor="19.900"/>
                <ImageCard src={product3} title="New 2/15" valor="25.000"/>
                <ImageCard src={product4} title="New 3/27" valor="19.900"/>
                <ImageCard src={product5} title="New 4/16" valor="39.900"/>
                <ImageCard src={product6} title="New 3/23" valor="25.900"/>
                <ImageCard src={product7} title="New 2/45" valor="27.900"/>
            </div>            
        </div>
    )
}

export default CarouselProducto

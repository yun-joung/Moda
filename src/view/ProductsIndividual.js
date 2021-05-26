import React, { useContext, useEffect } from 'react'
import { Context } from "../store/appContext"
import { product1} from '../components/image/image'
import ProductInfo from '../components/Productos/ProductInfo';
import "../style/responsive.scss"
import "../style/responsive.scss"
import ProductIntere from '../components/Carousel/ProductIntere';

const ProductsIndividual=props=> {
    const { store, actions} = useContext(Context);
    const { id } = props.match.params;
    const item = store.product;

    useEffect(() => {
        actions.getProductById(id)
    }, [])

    return (
        <div className="containers"> 
        <div className="productInfoBox">
            <div className="col-4" >
                <img src={product1} alt={props.product_name} className="productImg"></img>
            </div>
            <div className="col-5" >
                <ProductInfo  
                    product_name={item.product_name}
                    material ={item.material}
                    price={item.price}
                    id={item.id}
                />
            </div>
        </div>
        <div>
             
            <ProductIntere />
        </div>
        </div>
    )
}


export default ProductsIndividual

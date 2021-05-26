import React, { useContext } from 'react'
import { Context } from "../../store/appContext";
import '../../style/index.scss'
import '../../style/responsive.scss'
import { product1 } from '../image/image'
import ProductCard from './productCard.jsx';

function ProductBox() {
    const { store} = useContext(Context);

    return (
        <div className="productList">
            {store.products.map(item => {
						return (
                            <div className="card" key={item.id}>
                            <ProductCard
                             img={product1}
                             id={item.id}
                             product_name={item.product_name}
                             color={item.color}
                             price={item.price}
                             />
                             </div>
                        );}
            )}
        </div>
    )
}

export default ProductBox

import React, { useContext } from 'react'
import { Context } from "../store/appContext"
import { product1} from '../components/image/image'
import "../style/responsive.scss"
import "../style/responsive.scss"
import CompraList from '../components/Productos/CompraList'

const Compra =props=>{
    const { store } = useContext(Context);
    //const item = store.buyProducts;

    return (
        <div  className="containers">
            { store.buyProducts.length === 0 
            ?
            <div className="productInfoBox">
            <h1 className="CompraListaBox Compratext" >No hay producto comprado </h1>
            </div>
            :   
            <>
            <h1 className="productInfoBox Compratext" style={{marginBottom:"50px"}}>Gracias por su compra</h1>
            { store.buyProducts.map(item => {
                return (
                    <div className="productInfoBox" key={item.id}>
                        <CompraList
                        src = { product1 }
                        product_name = {item.product_name}
                        price= {item.price}
                        id = {item.id}
                        cantidad_producto = {item.cantidad_producto} />
                    </div>
                )
            })
            } 
            </>     
            }

            
        </div>         
    )
}

export default Compra

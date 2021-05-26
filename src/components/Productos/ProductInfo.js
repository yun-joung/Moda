import React, { useState, useContext} from 'react'
import { Context } from "../../store/appContext"
import '../../style/index.scss'
import '../../style/responsive.scss'
import { Link, withRouter } from 'react-router-dom'

const ProductInfo =props => {
    const { actions } = useContext(Context);
    const [num, setNum] = useState(0)

    const incNum = () => {
        setNum(num+1)
    }

    const decNum = () => {
        if(num > 0){
            setNum(num-1)
        } else {
            setNum(0)
        }
    }

    const handleBuy = e => {
		e.preventDefault();
		actions.buyProducto({
			product_name: props.product_name,
            price: props.price,
            cantidad_producto: `${num}`,
            id:props.id
		});
		props.history.push("/compra");
	};

    return (
        <div>
            <div className="line" />
            <h2>{props.product_name}</h2>
            <h2>$ {props.price}</h2> 
            <p className="margin2">Material: {props.material}</p>
            <p className="margin2">SIZE: free</p>
            <p className="margin2">SKU {props.id}</p>
            <form className="box">
                <label type="text"> Cantidad</label><br/>
                <div className ="dec buttonA" onClick={decNum}>-</div>
                <p className="input-filed" name="cantidad_producto" >{num}</p>
                <div className ="inc buttonA" onClick={incNum}>+</div>
            </form>
            <Link to="/compra">
                <button className="lineBut" onClick={e => {handleBuy(e)}}> COMPRAR </button>
            </Link>
        </div>
    )
}

export default withRouter(ProductInfo);

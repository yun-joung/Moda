import React, { useContext, useState } from 'react'
import { Context } from "../../store/appContext"
import { Link } from "react-router-dom"

const CompraList =(props)=> {
    const { actions} = useContext(Context);
    const [num, setNum] = useState(props.cantidad_producto)

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

    return (
        <div className="CompraListaBox">
             <div className="col-4-2" >
                <img src={props.src} alt={props.product_name} className="CompraproductImg"></img>
            </div>
            <div className="col-2" >
                <button className="ButElinimar" onClick = {()=> actions.eliminarLista(props.id)}>
                    <i className="fas fa-trash-alt float-right"></i>
                </button>
            </div>
            <div className="col-5-2" >
                <h2 style={{marginTop:"0"}}>{props.product_name}</h2>
                <h2>$ {props.price}</h2> 
                <p className="margin2">SIZE: free</p>
                <p className="margin2">SKU {props.id}</p>
                <form className="box">
                    <label type="text"> Cantidad</label><br/>
                    <div className ="dec buttonA" onClick={decNum}>-</div>
                    <p className="input-filed" name="cantidad_producto" >{num}</p>
                    <div className ="inc buttonA" onClick={incNum}>+</div>
                </form>
                <Link to ={"/producto/" + props.id}>
                    <p className="margin2">Volver a producto <i className="fas fa-arrow-right"></i></p>
                </Link>
            </div>
            
        </div>
    )
}

export default CompraList

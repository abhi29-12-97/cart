import React from "react";

class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image}></img>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Iphone</div>
                    <div  style={{color:"gray"}}>999</div>
                    <div style={{color:"gray"}}>Qty:1</div>
                    <div className="cart-items-actions">
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        );
    }
}
const style={
    image:{
        height:100,
        width:100,
        borderRadius:4,
        background:"gray"
    }

}
export default CartItem;
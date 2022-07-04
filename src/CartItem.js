import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:"Phone",
            Qty:1,
            image:''
        }
    }
    render(){
        const {price,title,Qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} src={this.state.image}></img>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div  style={{color:"gray"}}>{price}</div>
                    <div style={{color:"gray"}}>{Qty}</div>
                    <div className="cart-items-actions">
                        {/* Buttons */}
                        <img alt="Increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
                        <img alt="Decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt="Delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" />
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
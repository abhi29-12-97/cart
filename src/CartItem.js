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
    increaseQuantity =() =>{
        //setState form one
        // this.setState({
        //     Qty:this.state.Qty+1
        // });

        //setState second form-- if previous state is required use this
        this.setState(function(prevState){
           return{
            Qty: prevState.Qty+1
           }
        });

    }
    decreaseQuantity=()=>{
        if(this.state.Qty==0){
            return;
        }
        this.setState(function(prevState){
            return{
             Qty: prevState.Qty-1
            }
         });
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
                    <div  style={{color:"gray"}}>RS {price}</div>
                    <div style={{color:"gray"}}>Qty: {Qty}</div>
                    <div className="cart-items-actions">
                        {/* Buttons */}
                        <img 
                        alt="Increase"
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                        onClick={this.increaseQuantity}/>

                        <img 
                        alt="Decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={this.decreaseQuantity} />

                        <img 
                        alt="Delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" />
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
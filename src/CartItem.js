import React from "react";

class CartItem extends React.Component{
    
    // testing(){
    //     const promise = new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done')
    //         },5000);

    //     })
    //     promise.then(()=>{
    //         this.setState({Qty:this.state.Qty+10});
    //         this.setState({Qty:this.state.Qty+10});
    //         this.setState({Qty:this.state.Qty+10});
    //         console.log(this.state)
            
    //     })
    // }
    //increaseQuantity =() =>{
        //setState form one
        // this.setState({
        //     Qty:this.state.Qty+1
        // });

        //setState second form-- if previous state is required use this
    //     this.setState(function(prevState){
    //        return{
    //         Qty: prevState.Qty+1
    //        }
    //     });

    // }
    // decreaseQuantity=()=>{
    //     if(this.state.Qty==0){
    //         return;
    //     }
    //     this.setState(function(prevState){
    //         return{
    //          Qty: prevState.Qty-1
    //         }
    //      });
    // }
    render(){
        
        console.log('this.props',this.props);
        const {price,title,Qty}=this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image}></img>
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
                        onClick={()=>{this.props.onIncreaseQuantity(this.props.product)}}/>

                        <img 
                        alt="Decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={()=>{this.props.onDecreaseQuantity(this.props.product)}} />

                        <img 
                        alt="Delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
                        onClick={()=>{this.props.onDelete(this.props.product.id)}} />
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
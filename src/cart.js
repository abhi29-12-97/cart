import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[{
                price:999,
                title:"Phone",
                Qty:1,
                image:'',
                id:1
            },
            {
                price:99,
                title:"watch",
                Qty:1,
                image:'',
                id:2
            },
            {
                price:9999,
                title:"laptop",
                Qty:1,
                image:'',
                id:3
            }]
        }
        // this.testing();
    }
    increaseQuantity=(product)=>{
        const{products}=this.state;
        const index=products.indexOf(product);
        products[index].Qty+=1;
        this.setState({
            products
        })
    }
    decreaseQuantity=(product)=>{
        const{products}=this.state;
        const index=products.indexOf(product);
        if(products[index].Qty!==0){
            products[index].Qty-=1;
        }else{
            return;
        }
        
        this.setState({
            products
        })
    }
    deleteProduct=(id)=>{
        const{products}=this.state;
        const item=products.filter((item)=> item.id !==id );
        this.setState({
            products:item
        })
    }
    render(){
        const {products}=this.state;
        return(
            <div className="cart">
                
                {products.map((product)=>{
                    return (
                    <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQuantity={this.increaseQuantity}
                    onDecreaseQuantity={this.decreaseQuantity}
                    onDelete={this.deleteProduct}
                    />
                    )
                })}
            </div>
        );
    }
}

export default Cart;
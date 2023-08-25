import React from "react";
import "./Title.css"


class Card extends React.Component{

    constructor(props){
        super(props);
        this.state={
    
     arrobj : [
        {imgurl : "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",  
         name :  "CAPSICUM-GREEN",
         price : 64,
         quantity :  500,
         orderQ : 0
    },
    {imgurl :   "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
        name :  "CAULIFLOWER",
        price :   33,
        quantity : 1,
        orderQ : 0
   },
   {imgurl :   "https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
    name : "ONION",
    price : 37,
    quantity : 1,
    orderQ : 0
},{imgurl :   "https://www.bigbasket.com/media/uploads/p/s/10000203_16-fresho-tomato-local.jpg" ,
    name :     "TOMATO",
    price :   134,
    quantity :  1,
    orderQ : 0
},{imgurl :   "https://www.bigbasket.com/media/uploads/p/s/10000159_27-fresho-potato.jpg",
    name :     "POTATO",
    price :    37,
    quantity :  1,
    orderQ : 0
},{imgurl :   "https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",
    name :     "CORIANDER LEAVES",
    price :     15,
    quantity :   1,
    orderQ : 0
}]
}}


increment(cardobj){
    console.log(cardobj);
    this.setState((prevState)=>{
        const updatedArr = prevState.arrobj.map((val)=>{
            if (cardobj.name == val.name){
                return { ...val, orderQ:val.orderQ + 1}
            }
            return val;
        })

        return {arrobj:updatedArr};
    })
}

decrement(cardobj){
    console.log(cardobj);
    this.setState((prevState)=>{
        const updatedArr = prevState.arrobj.map((val)=>{
            if (cardobj.name == val.name){
                return{ ...val,orderQ:val.orderQ - 1}
            }
            return val;
        })

        return{arrobj : updatedArr};
    })
}

     render(){
     let htmlstring = this.state.arrobj.map((val)=>{
            return (
                <div className="minw400 box w30 textalignc marbot30">
                <img src={val.imgurl} alt="m"/>
                <h2 className="cardfh2 textalignc">{val.name}</h2>
                <div className="df jcaround">
                <h2 className="cardsh2"> Rs {val.price}</h2>
                <h2 className="cardsh2">{val.quantity} Kg </h2>
                </div>
                <div className="df jcaround">
                    <span>Rs.{val.price*val.orderQ}</span>
                    <button onClick={()=>{this.increment(val)}} className="box2">+</button>
                    <span>{val.quantity*val.orderQ}Kg</span>
                    <button onClick={()=>{this.decrement(val)}} className="box2">-</button>
                </div>
                <button className="hover textalignc box2 martop40 bgblack clrwh">ADD TO CART</button>
                </div>
            )
        })
    
        return(
            <div className="df wrap jccenter jcaround paddtop10">
            {htmlstring}
            </div>
        )
     }
    }

export default Card;
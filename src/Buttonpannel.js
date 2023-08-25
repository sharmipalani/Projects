import React from "react";
import "./Images.css";

class Buttonpannel extends React.Component{
    
    
    constructor(props){
        super(props);
        }

    handle(val){
        this.props.senddata(val);
    }

    
    render(){

    
        return(
           <div className="ma martop30">
            <button className="button marright30 textalignc" onClick={()=>{this.handle("all")}}>CLOTHINGS</button>
            <button className="button marright30" onClick={()=>{this.handle("form")}}>FORMALS</button>
            <button className="button marright30" onClick={()=>{this.handle("trad")}}>TRADITIONAL</button>
            <button className="button marright30" onClick={()=>{this.handle("mod")}}>WESTERN</button>
            </div>
        )

    
    }
}


export default Buttonpannel;
import React from "react";
import "./Images.css";

class Images extends React.Component{

    arrobj = [{
        img  : "https://i.pinimg.com/474x/c1/e2/6a/c1e26a71e9118fd519e00681f6781d04.jpg",
        type : "all form"
    },{
       img : "https://img101.urbanic.com/v1/goods-pic/174c988c87fe4998bbd060b8724fcc98UR_w1000_q90.webp",
       type : "all mod"
    },{
        img : "https://i.pinimg.com/564x/d3/ee/60/d3ee601b3fe4729a24077aac43fc4b3e.jpg",
        type : "all trad"
    },{
        img : "https://i.pinimg.com/474x/c4/a2/e9/c4a2e9da96ee3a3ea381b8ef745dc011.jpg",
        type : "all form"
    },{
        img : "https://i.pinimg.com/474x/ab/6d/6d/ab6d6d5f6d64090b9e6b05fa124757cf.jpg",
        type : "all form"
    },{
        img : "https://i.pinimg.com/474x/4c/a6/d4/4ca6d483efa74914f20bb2a52000572f.jpg",
        type : "all form"
    },{
        img : "https://i.pinimg.com/564x/04/6b/23/046b231795d640bcfc22fefa32921fbf.jpg",
        type : "all trad"
    },{
        img : "https://i.pinimg.com/564x/a8/94/2e/a8942e2f1858d264ceb3b7630ca34156.jpg",
        type : "all mod"
    },{  
        img : "https://i.pinimg.com/564x/f1/c4/55/f1c45545504463646632261c71f2fb03.jpg",
        type : "all trad"
    },{
        img : "https://img101.urbanic.com/v1/goods-pic/4c16e7b0e8ee4afe8ff6437efc36cf5bUR_w540_h720_q70.webp",
        type : "all mod"
    },{
        img : "https://i.pinimg.com/564x/87/c0/e5/87c0e5ff97c27f7a745c5882e4f20a5b.jpg",
        type : "all trad"
    },{
        img : "https://i.pinimg.com/564x/62/20/df/6220df3f773cfb6ad2702226ab24824d.jpg",
        type : "all form"
    },{
        img : "https://i.pinimg.com/564x/e7/b3/da/e7b3da60623aefe571ba5fec8efbe19d.jpg",
        type : "all trad"
    },{
        img : "https://i.pinimg.com/564x/c1/47/a0/c147a01d1ceecb929046e5a69ceca27a.jpg",
        type : "all mod"
    },{
        img : "https://i.pinimg.com/750x/71/ad/e1/71ade1a4361f067e5f002c2e22906c8c.jpg",
        type : "all form"
    },{
        img : "https://i.pinimg.com/474x/b2/58/e9/b258e9c2b3deaf33c4ba62b1f989a616.jpg",
        type : "all mod"
    },{
        img : "https://i.pinimg.com/564x/14/63/b3/1463b3febd81692a1e30525cbd9d6d61.jpg",
        type : "all trad"
    },{
        img : "https://i.pinimg.com/564x/e6/56/d4/e656d49311155d4b574a2800548fa0b1.jpg",
        type : "all mod"
    }]

    constructor(props){
        super(props);
    }

    render(){
           let datastring = this.arrobj.map((val)=>{
            if(val.type.includes(this.props.getvalue)){
            return(
                <div className="ma">
                    <img className="w60 maxw400 box" src={val.img} alt="none"/>
                </div>
            );
           }
        }

           );

           

        return(
            <div>
            <div className="df martop jc">
               {datastring}
            </div>
             </div>
        )
    }
}

export default Images;
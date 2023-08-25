import React from "react";

class Title extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="df jcaround padd50 bgblack">
            <img className="w10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_DU7ZXPECXHKuRGrIwknRGaww74y61uRm4ibHWs_BQ&s"/>
            <form>
                <input className="form" type="text" placeholder="SEARCH FOR PRODUCTS"/>
            </form>
            <p className="titlep"><span className="spanp">CONTACT</span>-1860 123 1000</p>
            <a href=",">600089,CHENNAI</a>
            <a href=",">LOGIN/SIGN UP</a>
            </div>
        )
    }

}
    

export default Title;
import logo from './logo.svg';
import './App.css';
import Buttonpannel from './Buttonpannel';
import Images from './Images';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      form : "all",
    }
  }
  getdata=(name1)=>{
    this.setState({form:name1});
  }
  
  render(){


  return (
    <div className="App bgblack">
      <Buttonpannel senddata={this.getdata} />
      <Images getvalue={this.state.form}/>
      
    </div>
  );
  }
}


export default App;

import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from "./Vaidation";
import CharComponent from "./CharComponent";


class App extends Component {

  state={userInput:''}

  changeinputhandler=(event)=>{

   this.setState({userInput:event.target.value})
  

    return (this.state.userInput.length)
  }

  clickremoveHandler=(index)=>{

    const text=this.state.userInput.split('');
   const updatedtext= text.splice(index,1);
const joined=text.join('');

   this.setState({userInput:joined});
    console.log(updatedtext);

  }

  render(){

    const char=this.state.userInput.split('').map((ch,index)=>{
      return <CharComponent character={ch} key ={index} click={()=>this.clickremoveHandler(index)} />
    })
  return ( 
    <div>  

      <h>Please enter some text here :</h>
      <input type="text" onChange={this.changeinputhandler} value={this.state.userInput} ></input>
  <p>Written Text is : {this.state.userInput} </p> <p> Output length : {this.state.userInput.length}</p>
      <Validation textlength={this.state.userInput.length}></Validation>
{char}

    </div>
  
  )
}}

export default App;

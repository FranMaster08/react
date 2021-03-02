import { Component } from 'react';
import './App.css';
import db from "./db/db.json";


// let Saludo=(props)=>{
//   return <div>Hola {props.popo} y hola {props.fran}</div>
// }

class Saludo extends Component{
  render(){
    return <div>Hola {this.props.popo} y hola {this.props.fran}</div>
  }
}

class Lista extends Component{
 
  state={
    listaDeDatos:db,
    visible:true
  }

  render(){
    console.log(db);
    return <div> 
              <ul>{this.state.listaDeDatos.map(item=><li>{item.name}</li>)}</ul>
          </div>
  }

}



class App extends Component{
  render(){

    return <div><Lista/></div>
  }
}

export default App;
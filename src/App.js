import React from 'react';
import Class from "./Components/Class"
import Function from "./Components/Functional_component"
import './App.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
</style>
 class App extends React.Component{
  constructor(){
    super();
    this.state = {
       showClass : false,
       showFunction : false}
  
  }
  showBox = (e) =>{
    this.setState({showClass: !this.state.showClass})
  }
  showFunctional = (e) =>{
    this.setState({showFunction : !this.state.showFunction})
  }

  render(){
  return(
      <>
      <div className="header"><h1>Styiling using Functional and Class Component</h1></div>
      <button className='class_btn' onClick={this.showBox}>To See Styling In Class Component</button>
      <button className='function_btn' onClick={this.showFunctional}>To See Styling In Functional Component</button>
      {this.state.showClass && <Class/>}
      {this.state.showFunction && <Function/>}
      </>
  )
  }
}

export default App
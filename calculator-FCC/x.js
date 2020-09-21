import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      currentVal:0,
      formula:"",
      displayVal:0,
      decimal_count:0
    }
    this.handleNumClick=this.handleNumClick.bind(this)
    this.handleOperator=this.handleOperator.bind(this)
    this.handleEqualClick=this.handleEqualClick.bind(this)
    this.handleACclick=this.handleACclick.bind(this)
    this.handleDecimalClick=this.handleDecimalClick.bind(this)
  }
  handleOperator(e){
    var x=e.target.innerHTML
          this.setState((state)=>{
            return {formula: state.formula + x }
          })
          

  }
  handleNumClick(e){
     var  x=e.target.innerHTML
      console.log(x)
      
      this.setState((state) => {
        return {formula: state.formula + x.toString()
                
              };
      });
      

  }
  handleEqualClick(){
    this.setState({
      currentVal:eval(this.state.formula),
      formula:eval(this.state.formula)
    })
    
    
    
  }
  handleACclick(){
    this.setState({formula:"",
                currentVal:0
                  })
  }
  handleDecimalClick(){
    /*if (this.state.formula.indexOf(".") === -1) {
        this.setState({ input: this.state.formula + "." });
      }*/
      let z=this.state.formula+"."
      var regex=/\.\.+/
      if(regex.test(z)){
        console.log(regex.test(z),"true if i am violating .. condition?")
        this.setState({
          formula:this.state.formula
        })
      }else{
        this.setState({
          formula:z
        })
      }
      
    };
    
  
  render(){
     return(
  <div id="main">
         <h1 className="heading">Calulator By CodeYellow</h1>
         <div className="calculator">
         <div id="two-display">
           <h1 id="formula">{this.state.formula}</h1>
           <h1 id="display">{this.state.currentVal}</h1>
         </div>
         <div className="buttons">
           <button id="clear" className="btn btn-warning" onClick={this.handleACclick}>ac</button>
           <button id="back"  className="btn btn-warning" >bc</button>
           <button id="percentage"  className="btn btn-warning">%</button>
           <button id="divide"  className="btn btn-warning" onClick={this.handleOperator}>/</button>
           <button id="seven"  className="btn btn-warning" onClick={this.handleNumClick}>7</button>
           <button id="eight"  className="btn btn-warning" onClick={this.handleNumClick}>8</button>
           <button id="nine"  className="btn btn-warning" onClick={this.handleNumClick}>9</button>
           <button id="multiply"  className="btn btn-warning" onClick={this.handleOperator}>*</button>
           <button id="four"  className="btn btn-warning" onClick={this.handleNumClick}>4</button>
           <button id="five"  className="btn btn-warning" onClick={this.handleNumClick}>5</button>
           <button id="six"  className="btn btn-warning" onClick={this.handleNumClick}>6</button>
           <button id="subtract"  className="btn btn-warning" onClick={this.handleOperator}>-</button>
           <button id="one"  className="btn btn-warning" onClick={this.handleNumClick}>1</button>
           <button id="two" className="btn btn-warning" onClick={this.handleNumClick}>2</button>
           <button id="three"  className="btn btn-warning" onClick={this.handleNumClick}>3</button>
           <button id="add"  className="btn btn-warning" onClick={this.handleOperator}>+</button>
           <button id="blank"  className="btn btn-warning">__</button>
           <button id="zero"  className="btn btn-warning" onClick={this.handleNumClick}>0</button>
           <button id="decimal"  className="btn btn-warning" onClick={this.handleDecimalClick}>.</button>
           <button id="equals"  className="btn btn-warning" onClick={this.handleEqualClick}>=</button>
           





           
         </div>
       </div>
       </div>
  )
  }
 
}

export default App
/*handleFloatClick(){
    this.setState({ inputValue : this.state.inputValue.includes(".") || this.state.inputValue === "" ? this.state.inputValue : this.state.inputValue + "." })
}*/
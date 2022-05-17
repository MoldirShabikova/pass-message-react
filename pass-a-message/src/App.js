import logo from './logo.svg';
import './App.css';
import React , {Component}from 'react'

class App extends Component {
  constructor(){
    super()
    this.state= {
      inputValue: "",
      text: '',
      showError: false
    }
  }

  handleChange =(e)=>{
    this.setState({inputValue: e.target.value }) 
  }


  handleSubmit =(e)=>{
    const {inputValue ,text} = this.state
    e.preventDefault()
   
      this.setState({text: inputValue})
      this.setState({inputValue: ''})
      if(inputValue === ""){
      this.setState({showError: true})
        setTimeout(() => {
        this.setState({showError: false}) 
    }, 2000)
  }
  }

  render(){
   
    const {inputValue, text, showError} = this.state
      return (
    <div className="App">
      <h1>A Message You Would Like To Pass</h1>
     
        <form>
          <input onChange={this.handleChange} type='text' value={inputValue} />
           <button onClick={this.handleSubmit}>Submit</button>
           <p className={showError? '' : 'error'}>Please Enter A Value To Pass</p>
          <h3>Last Message Delivered</h3>
           <p>{text}</p>
        </form>

    </div>
  );
  }

}

export default App;
